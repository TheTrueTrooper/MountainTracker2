import { QlField, QlIdField } from "../../graphql-helpers"
import { RockClimbingWall } from "./rock-climbing-wall";

export class RockClimbingWallGeoFenceNode {
    @QlIdField()
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