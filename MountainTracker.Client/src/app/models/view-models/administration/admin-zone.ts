import { Region, Zone } from "../../service-models"
import { labeled } from "./interface/admin-interface"

export class AdminZone extends Zone implements labeled
{
    public selectLabel?:string
}