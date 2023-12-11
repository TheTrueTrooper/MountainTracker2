import { RockClimbingRoute } from "../../service-models"
import { labeled } from "./interface/admin-interface"

export class AdminRockClimbingRoute extends RockClimbingRoute implements labeled
{
    public selectLabel?:string
}