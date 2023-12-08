import { ProvinceOrState } from "../../service-models";
import { AdminRegion } from "./admin-region";
import { labeled } from "./interface/admin-interface";


export class AdminProvinceOrState extends ProvinceOrState implements labeled
{
    public selectLabel?:string
    public provincesOrStatesAsAdmin?:AdminRegion[] | null;
}