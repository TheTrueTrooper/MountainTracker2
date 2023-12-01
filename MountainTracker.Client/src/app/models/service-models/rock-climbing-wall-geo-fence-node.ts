import { QlField } from "../../graphql-helpers"
import { RockClimbingWall } from "./rock-climbing-wall";

export class RockClimbingWallGeoFenceNode {

    @QlField()
    public id?: number;
    @QlField()
    public climbingWallId?: number;
    @QlField()
    public latitude?: number;
    @QlField()
    public longitude?: number;
      
    public climbingWall?: RockClimbingWall;
}