import { Apollo, ApolloBase, TypedDocumentNode, gql } from "apollo-angular";
import { QlSelectionSet, QlSelectionSetTyped } from "../../../graphql-helpers";
import * as graphqlHelpers from '../../../graphql-helpers/graphql-helper';
import { Observable, map, of, switchMap } from "rxjs";
import { ApolloQueryResult } from "@apollo/client/core";

type CoreQlNullableTypes =    'String' |  'Int' |  'Float' |  'Boolean' |  'ID'
type CoreQlNonNullableTypes = 'String!' | 'Int!' | 'Float!' | 'Boolean!' | 'ID!'
type CoreQlNullableListTypes =    '[String]' |  '[Int]' |  '[Float]' |  '[Boolean]' |  '[ID]'
type CoreQlNonNullableListTypes = '[String]!' | '[Int]!' | '[Float]!' | '[Boolean]!' | '[ID]!'
type NetQlNullableTypes =    'BigInt' |  'Byte' |  'Date' |  'DateOnly' |  'DateTime' |  'DateTimeOffset' |  'Decimal' |  'Guid' |  'Half' |  'Long' |  'Milliseconds' |  'SByte' |  'Seconds' |  'Short' |  'TimeOnly' |  'UInt' |  'ULong' |  'Uri' |  'UShort'
type NetQlNonNullableTypes = 'BigInt!' | 'Byte!' | 'Date!' | 'DateOnly!' | 'DateTime!' | 'DateTimeOffset!' | 'Decimal!' | 'Guid!' | 'Half!' | 'Long!' | 'Milliseconds!' | 'SByte!' | 'Seconds!' | 'Short!' | 'TimeOnly!' | 'UInt!' | 'ULong!' | 'Uri!' | 'UShort!'
type NetQlNullableListTypes =    '[BigInt]' |  '[Byte]' |  '[Date]' |  '[DateOnly]' |  '[DateTime]' |  '[DateTimeOffset]' |  '[Decimal]' |  '[Guid]' |  '[Half]' |  '[Long]' |  '[Milliseconds]' |  '[SByte]' |  '[Seconds]' |  '[Short]' |  '[TimeOnly]' |  '[UInt]' |  '[ULong]' |  '[Uri]' |  '[UShort]'
type NetQlNonNullableListTypes = '[BigInt]!' | '[Byte]!' | '[Date]!' | '[DateOnly]!' | '[DateTime]!' | '[DateTimeOffset]!' | '[Decimal]!' | '[Guid]!' | '[Half]!' | '[Long]!' | '[Milliseconds]!' | '[SByte]!' | '[Seconds]!' | '[Short]!' | '[TimeOnly]!' | '[UInt]!' | '[ULong]!' | '[Uri]!' | '[UShort]!'
type BasicQLTypes = CoreQlNullableTypes | CoreQlNonNullableTypes | CoreQlNullableListTypes | CoreQlNonNullableListTypes | NetQlNullableTypes | NetQlNonNullableTypes | NetQlNullableListTypes | NetQlNonNullableListTypes

export type QlQueryParams = {
  param: string, 
  input?: string, 
  qlType: BasicQLTypes | string
};

export class QlQueryMeta<T>{
  public readonly queryParamPrefix: string;
  public readonly queryParams: QlQueryParams[];
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
    this.selection = `${query}${braceValues('(')}${this.queryParams.map((x)=>`${x?.input ?? x.param}: $${this.queryParamPrefix}_${x.param}`).join(',')}${braceValues(')')}
{
${graphqlHelpers.selectToQlFields(selection) ?? graphqlHelpers.ensureQlFields((classToField as any).prototype.constructor)}
}`
  }
}  

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