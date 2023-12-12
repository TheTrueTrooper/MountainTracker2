import { QlField, QlIdField } from "../../graphql-helpers"
import { RockClimbingRoute } from "./rock-climbing-route"

export class RockClimbingDifficulty {
    @QlIdField()
    @QlField()
    public id?: number;
    @QlField()
    public englishCode?: string; 
      
    public rockClimbingWalls?: RockClimbingRoute[];
    
}