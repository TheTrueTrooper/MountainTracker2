import { Apollo, ApolloBase, TypedDocumentNode, gql } from "apollo-angular";
import { QlQueryMeta, QlQueryParams, QlSelectionSet, QlSelectionSetTyped } from "../../../graphql-helpers";
import { Observable, of, switchMap } from "rxjs";
import { ApolloQueryResult } from "@apollo/client/core";

export abstract class BaseQlService {
    public readonly moutainTrackerApi: ApolloBase;
    constructor(protected apolloProvider: Apollo) {
      this.moutainTrackerApi = this.apolloProvider.use("MountainTracker");
     }

   protected generateQuery(query: QlQueryMeta<any>): TypedDocumentNode<any, any>
   {
    const hasParamValue: boolean = query.hasParamValues();
    const braceValues: (char: string)=>string = (char: string) => hasParamValue ? char : '';
    const qlQuery = `query${braceValues('(')}${query.queryParamsFlat()}${braceValues(')')}
{
${query.selection}
}`
    return gql`${qlQuery}`
  }

  protected generateQueryMeta<T extends {
    new (): any;
  }>(classToField: T,query:string, selection?: QlSelectionSet | QlSelectionSetTyped<undefined, any>, queryParams: QlQueryParams[] = [], queryParamPrefix: string | null = null): Observable<QlQueryMeta<T>>
   {
    return of(new QlQueryMeta<T>(classToField.prototype.constructor, query, selection, queryParams, queryParamPrefix));
  }

  protected generateMergedQuery(queries: QlQueryMeta<any>[]): TypedDocumentNode<any, any>
  {
    const hasParamValues: boolean = queries.some(x=>x.hasParamValues());
    const braceValues: (char: string)=>string = (char: string) => hasParamValues ? char : '';

    const qlQuery = `query${braceValues('(')}${queries.filter(x=>x.queryParams.length > 0).map(x=>x.queryParamsFlat()).join(',')}${braceValues(')')}
{
${queries.map(x=>x.selection).join('\n')}
}`
    console.log(qlQuery);
    return gql`${qlQuery}`
  }

  public getMergedQuery<T extends QlQueryMeta<any>[] | {[key: string]: QlQueryMeta<any>}>(queries: T, variables?: {[key: string]: any}): Observable<{queries: T, result: ApolloQueryResult<any>}>
  {
    let queriesAsArray: QlQueryMeta<any>[];
    if(Array.isArray(queries))
    {
      queriesAsArray = queries;
    }
    else
    {
      queriesAsArray = Object.keys(queries).map(i=>queries[i] as QlQueryMeta<any>);
    }
    const query = this.generateMergedQuery(queriesAsArray!);
    return this.moutainTrackerApi.query<any>({
      query: query, 
      variables: variables                                                                                                                                                                                                                           
    }).pipe(switchMap((result) => of({ queries: queries, result: result})))
  }
} 