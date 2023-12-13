import { Area } from "../../service-models"
import { labeled } from "./interface/admin-interface"

export class AdminArea extends Area implements labeled
{
    public selectLabel?:string
}