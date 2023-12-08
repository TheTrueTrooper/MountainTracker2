import { District } from "../../service-models";
import { labeled } from "./interface/admin-interface";

export class AdminDistrict extends District implements labeled
{
    public selectLabel?:string
}