import { QlField } from "../../graphql-helpers";
import { RockClimbingType } from "./rock-climbing-type";
import { RockClimbingWall } from "./rock-climbing-wall";

export class RockClimbingRoute {
        @QlField()
        public id?: number;
        @QlField()
        public routeCode?: string;
        @QlField()
        public englishFullName?: string;
        @QlField()
        public climbingWallId?: number;
        @QlField()
        public info?: string | null;
        @QlField()
        public thumbPictureBytes?: number[] | null;
        @QlField()
        public rating?: number;
        @QlField()
        public heightInMeters?: number;
        @QlField()
        public heightInFeet?: number;
        @QlField()
        public numberOfPitchs?: number;
        @QlField()
        public firstAscent?: string;
        @QlField()
        public firstFreeAscent?: string;
        @QlField()
        public sunAm?: boolean;
        @QlField()
        public sunPm?: boolean;
        @QlField()
        public filteredSun?: boolean;
        @QlField()
        public sunny?: boolean;
        @QlField()
        public shady?: boolean;
        @QlField()
        public driesFast?: boolean;
        @QlField()
        public dryInRain?: boolean;
        @QlField()
        public windy?: boolean;
        @QlField()
        public climbAnglesHaveSlabs?: boolean;
        @QlField()
        public climbAnglesHaveVerticals?: boolean;
        @QlField()
        public climbAnglesHaveOverHangs?: boolean;
        @QlField()
        public climbAnglesHaveRoofs?: boolean;
        @QlField()
        public rockFalls?: boolean;
        @QlField()
        public seepage?: boolean;
        @QlField()
        public reachy?: boolean;
        @QlField()
        public dyno?: boolean;
        @QlField()
        public pumpy?: boolean;
        @QlField()
        public techy?: boolean;
        @QlField()
        public power?: boolean;
        @QlField()
        public crimpy?: boolean;
        @QlField()
        public slopey?: boolean;
        @QlField()
        public pockSlashHole?: boolean;
        @QlField()
        public seatStart?: boolean;
        @QlField()
        public runout?: boolean;
        @QlField()
        public stickClip?: boolean;
        @QlField()
        public typeId?: number;
        @QlField()
        public difficultyId?: number;
        
        climbingWall?: RockClimbingWall
        climbingType?: RockClimbingType
    }