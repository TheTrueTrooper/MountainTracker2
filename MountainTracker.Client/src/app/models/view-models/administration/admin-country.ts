import { Country } from "../../service-models"
import { labeled } from "./interface/admin-interface"

export class AdminCountry extends Country implements labeled
{
    public selectLabel?:string
}