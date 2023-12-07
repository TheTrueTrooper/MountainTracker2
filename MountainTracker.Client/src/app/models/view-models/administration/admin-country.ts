import { Country } from "../../service-models"
import { AdminProvinceOrState } from "./admin-province-or-state"
import { labeled } from "./interface/admin-interface"

export class AdminCountry extends Country implements labeled
{
    public selectLabel?:string
    public provincesOrStatesAsAdmin?:AdminProvinceOrState[] | null;
}