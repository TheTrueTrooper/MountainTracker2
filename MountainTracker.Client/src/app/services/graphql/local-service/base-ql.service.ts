import { Apollo, ApolloBase, TypedDocumentNode, gql } from "apollo-angular";
import { QlSelectionSet, QlSelectionSetTyped } from "../../../graphql-helpers";
import * as graphqlHelpers from '../../../graphql-helpers/graphql-helper';
import { Observable, of } from "rxjs";

export type QlQueryParams = {
  param: string, 
  input: string, 
  qlType: string
};

export class QlMetaQuery<T>{
  public readonly queryParamPrefix: string;
  public readonly queryParams: {param: string, input: string, qlType: string}[];
  public readonly selection: string;
  public readonly query: string;

  public hasParamValues(): boolean
  {
    return this.queryParams && this.queryParams.length > 0;
  }

  public queryParamsFlat(): string
  {
    return this.queryParams.map((x)=>`$${this.queryParamPrefix}_${x.param}: ${x.qlType}`).join(',')
  }

  public getParamSelector(param:string): string
  {
    const index = this.queryParams.findIndex(x=>x.param === param)
    return `${this.queryParamPrefix}_${this.queryParams[index].param}`
  }

  public constructor(classToField: T, query:string, selection?: QlSelectionSet | QlSelectionSetTyped<undefined, any>, queryParams: QlQueryParams[] = [], queryParamPrefix: string | null = null){
    this.query = query;
    this.queryParamPrefix = queryParamPrefix ?? (classToField as any).name
    this.queryParams = queryParams;
    const hasValues: boolean = this.hasParamValues();
    const braceValues: (char: string)=>string = (char: string) => hasValues ? char : '';
    this.selection = `${query}${braceValues('(')}${this.queryParams.map((x)=>`${x.input}: $${this.queryParamPrefix}_${x.param}`).join(',')}${braceValues(')')}
    {
      ${graphqlHelpers.selectToQlFields(selection) ?? graphqlHelpers.ensureQlFields((classToField as any).prototype.constructor)}
    }`
  }
}  

export abstract class BaseQlService {
    protected moutainTrackerApi: ApolloBase;
    constructor(protected apolloProvider: Apollo) {
      this.moutainTrackerApi = this.apolloProvider.use("MountainTracker");
     }

   protected generateQuery2<
   T extends {
     new (): any;
   }
   >(query: QlMetaQuery<any>): TypedDocumentNode<any, any>
   {
    const hasParamValue: boolean = query.hasParamValues();
    const braceValues: (char: string)=>string = (char: string) => hasParamValue ? char : '';
    const qlQuery = `query${braceValues('(')}${query.queryParamsFlat()}${braceValues(')')}
    {
      ${query.selection}
    }`
    console.log(qlQuery);
    
    return gql`${qlQuery}`
  }

   protected generateQuery<
   T extends {
     new (): any;
   }
   >(classToGet: T, query:string, selection?: QlSelectionSet | QlSelectionSetTyped<undefined, any>, queryVar: string = "", queryParam: string = ""): TypedDocumentNode<any, any>
   {
    const qlQuery = `query${queryVar}
    {
      ${query}${queryParam}
      {
        ${graphqlHelpers.selectToQlFields(selection) ?? graphqlHelpers.ensureQlFields(classToGet.prototype.constructor)}
      }
    }`
    return gql`${qlQuery}`
  }

  protected generateQueryMeta<T extends {
    new (): any;
  }>(classToField: T,query:string, selection?: QlSelectionSet | QlSelectionSetTyped<undefined, any>, queryParams: {param: string, input: string, qlType: string}[] = [], queryParamPrefix: string | null = null): Observable<QlMetaQuery<T>>
   {
    return of(new QlMetaQuery<T>(classToField.prototype.constructor, query, selection, queryParams, queryParamPrefix));
  }

  protected generateMergedQuery(queries: QlMetaQuery<any>[]): TypedDocumentNode<any, any>
  {
    const hasParamValues: boolean = queries.some(x=>x.hasParamValues());
    const braceValues: (char: string)=>string = (char: string) => hasParamValues ? char : '';

    const qlQuery = `query${braceValues('(')}${queries.map(x=>x.queryParamsFlat()).join(',')}${braceValues(')')}
    {
      ${queries.map(x=>x.selection).join('\n')}
    }`
    return gql`${qlQuery}`
  }
} 