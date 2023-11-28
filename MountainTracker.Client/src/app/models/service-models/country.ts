import { QlField } from "../../graphql-helpers/graphql-decorators"
import { ProvinceOrState } from "./province-or-state"

export class Country
{
    @QlField()
    public id?:number
    @QlField()
    public englishFullName?:string
    @QlField()
    public countryCode?:string

    public provincesOrStates?: ProvinceOrState
}