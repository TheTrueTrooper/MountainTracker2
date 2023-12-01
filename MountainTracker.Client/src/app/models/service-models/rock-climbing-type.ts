import { QlField } from "../../graphql-helpers"
import { RockClimbingRoute } from "./rock-climbing-route"

export class RockClimbingTypeType {

    @QlField()
    public id?: number;
    @QlField()
    public shortHand?: string; 
    @QlField()
    public englishFullName?: string;
      
    public rockClimbingWalls?: RockClimbingRoute;
   
}