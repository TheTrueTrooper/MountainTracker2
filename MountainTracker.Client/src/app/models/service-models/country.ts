import { ProvinceOrState } from "./province-or-state"

export class Country
{
    public Id?:number
    public EnglishFullName?:string
    public CountryCode?:string
    public ProvincesOrStates?: ProvinceOrState
    //public Users?:User[]
}