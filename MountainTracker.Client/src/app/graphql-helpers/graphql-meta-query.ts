import { ensureQlFields, selectToQlFields } from "./graphql-helper"
import { QlSelectionSet, QlSelectionSetTyped } from "./ql-selection-set"

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
  ${selectToQlFields(selection) ?? ensureQlFields((classToField as any).prototype.constructor)}
  }`
    }
  }  