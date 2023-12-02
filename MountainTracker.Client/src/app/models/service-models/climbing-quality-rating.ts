import { QlField } from "../../graphql-helpers";
import { RockClimbingWall } from "./rock-climbing-wall";

export class ClimbingQualityRating {
    @QlField()
    public id?: number;
    @QlField()
    public englishName?: String;

    public rockClimbingWallsInApr?: RockClimbingWall[];
    public rockClimbingWallsInAug?: RockClimbingWall[];
    public rockClimbingWallsInDec?: RockClimbingWall[];
    public rockClimbingWallsInFeb?: RockClimbingWall[];
    public rockClimbingWallsInJan?: RockClimbingWall[];
    public rockClimbingWallsInJul?: RockClimbingWall[];
    public rockClimbingWallsInJun?: RockClimbingWall[];
    public rockClimbingWallsInMar?: RockClimbingWall[];
    public rockClimbingWallsInMay?: RockClimbingWall[];
    public rockClimbingWallsInNov?: RockClimbingWall[];
    public rockClimbingWallsInOct?: RockClimbingWall[];
    public rockClimbingWallsInSep?: RockClimbingWall[];
}