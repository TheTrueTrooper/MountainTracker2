import { Region } from "../../service-models"
import { labeled } from "./interface/admin-interface"

export class AdminRegion extends Region implements labeled
{
    public selectLabel?:string
}