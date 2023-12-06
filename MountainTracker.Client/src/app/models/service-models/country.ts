import { QlComplexListField, QlField, QlIdField } from "../../graphql-helpers/graphql-decorators"
import { ProvinceOrState } from "./province-or-state"

export class Country
{
    @QlIdField()
    @QlField()
    public id?:number
    @QlField()
    public englishFullName?:string
    @QlField()
    public countryCode?:string

    @QlComplexListField()
    public provincesOrStates?: ProvinceOrState[]
}