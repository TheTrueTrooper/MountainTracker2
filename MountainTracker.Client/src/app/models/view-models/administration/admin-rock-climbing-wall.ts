import { RockClimbingWall } from "../../service-models/rock-climbing-wall"
import { labeled } from "./interface/admin-interface"

export class AdminRockClimbingWall extends RockClimbingWall implements labeled
{
    public selectLabel?:string
}