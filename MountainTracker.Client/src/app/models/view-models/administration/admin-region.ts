import { Region } from "../../service-models"
import { AdminProvinceOrState } from "./admin-province-or-state"
import { labeled } from "./interface/admin-interface"

export class AdminRegion extends Region implements labeled
{
    public selectLabel?:string
    //public provincesOrStatesAsAdmin?:AdminProvinceOrState[] | null;
}