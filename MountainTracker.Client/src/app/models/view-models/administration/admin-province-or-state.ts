import { ProvinceOrState } from "../../service-models";
import { labeled } from "./interface/admin-interface";


export class AdminProvinceOrState extends ProvinceOrState implements labeled
{
    public selectLabel?:string
}