import { QlField, QlIdField } from "../../graphql-helpers"
import { RockClimbingRoute } from "./rock-climbing-route"

export class RockClimbingType {
    @QlIdField()
    @QlField()
    public id?: number;
    @QlField()
    public shortHand?: string; 
    @QlField()
    public englishFullName?: string;
      
    public rockClimbingWalls?: RockClimbingRoute[];
}