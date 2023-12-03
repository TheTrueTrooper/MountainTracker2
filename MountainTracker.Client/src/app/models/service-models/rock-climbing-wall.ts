import { QlField, QlIdField } from "../../graphql-helpers";
import { Area } from "./area";
import { BusyRating } from "./busy-rating";
import { ClimbingQualityRating } from "./climbing-quality-rating";
import { RockClimbingRoute } from "./rock-climbing-route";
import { RockClimbingWallGeoFenceNode } from "./rock-climbing-wall-geo-fence-node";


export class RockClimbingWall {
    @QlField()
    public areaId?: number;
    @QlIdField()
    @QlField()
    public id?: number;
    @QlField()
    public englishFullName?: string;
    @QlField()
    public wallCode?: string;
    @QlField()
    public info?: String | null;
    @QlField()
    public latitudeStartOrCenter?: number | null;
    @QlField()
    public longitudeStartOrCenter?: number | null;
    @QlField()
    public latitudeParking?: number | null;
    @QlField()
    public longitudeParking?: number | null;
    @QlField()
    public thumbPictureBytes?: number[] | null;

    @QlField()
    public janSeasonalClimbingQualityRatingId?: number;
    @QlField()
    public febSeasonalClimbingQualityRatingId?: number;
    @QlField()
    public marSeasonalClimbingQualityRatingId?: number;
    @QlField()
    public aprSeasonalClimbingQualityRatingId?: number;
    @QlField()
    public maySeasonalClimbingQualityRatingId?: number;
    @QlField()
    public junSeasonalClimbingQualityRatingId?: number;
    @QlField()
    public julSeasonalClimbingQualityRatingId?: number;
    @QlField()
    public augSeasonalClimbingQualityRatingId?: number;
    @QlField()
    public sepSeasonalClimbingQualityRatingId?: number;
    @QlField()
    public octSeasonalClimbingQualityRatingId?: number;
    @QlField()
    public novSeasonalClimbingQualityRatingId?: number;
    @QlField()
    public decSeasonalClimbingQualityRatingId?: number;

    @QlField()
    public janSeasonalBusyRatingId?: number;
    @QlField()
    public febSeasonalBusyRatingId?: number;
    @QlField()
    public marSeasonalBusyRatingId?: number;
    @QlField()
    public aprSeasonalBusyRatingId?: number;
    @QlField()
    public maySeasonalBusyRatingId?: number;
    @QlField()
    public junSeasonalBusyRatingId?: number;
    @QlField()
    public julSeasonalBusyRatingId?: number;
    @QlField()
    public augSeasonalBusyRatingId?: number;
    @QlField()
    public sepSeasonalBusyRatingId?: number;
    @QlField()
    public octSeasonalBusyRatingId?: number;
    @QlField()
    public novSeasonalBusyRatingId?: number;
    @QlField()
    public decSeasonalBusyRatingId?: number;

    public janSeasonalClimbingQualityRating?: ClimbingQualityRating;
    public febSeasonalClimbingQualityRating?: ClimbingQualityRating;
    public marSeasonalClimbingQualityRating?: ClimbingQualityRating;
    public aprSeasonalClimbingQualityRating?: ClimbingQualityRating;
    public maySeasonalClimbingQualityRating?: ClimbingQualityRating;
    public junSeasonalClimbingQualityRating?: ClimbingQualityRating;
    public julSeasonalClimbingQualityRating?: ClimbingQualityRating;
    public augSeasonalClimbingQualityRating?: ClimbingQualityRating;
    public sepSeasonalClimbingQualityRating?: ClimbingQualityRating;
    public octSeasonalClimbingQualityRating?: ClimbingQualityRating;
    public novSeasonalClimbingQualityRating?: ClimbingQualityRating;
    public decSeasonalClimbingQualityRating?: ClimbingQualityRating;
    
    public janSeasonalBusyRating?: BusyRating;
    public febSeasonalBusyRating?: BusyRating;
    public marSeasonalBusyRating?: BusyRating;
    public aprSeasonalBusyRating?: BusyRating;
    public maySeasonalBusyRating?: BusyRating;
    public junSeasonalBusyRating?: BusyRating;
    public julSeasonalBusyRating?: BusyRating;
    public augSeasonalBusyRating?: BusyRating;
    public sepSeasonalBusyRating?: BusyRating;
    public octSeasonalBusyRating?: BusyRating;
    public novSeasonalBusyRating?: BusyRating;
    public decSeasonalBusyRating?: BusyRating;

    public area?: Area;
    public routes?: RockClimbingRoute[];
    public geoFenceNodes?: RockClimbingWallGeoFenceNode[];
}