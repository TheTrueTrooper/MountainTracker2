import { QlField } from "../../graphql-helpers";
import { Area } from "./area";
import { RockClimbingRoute } from "./rock-climbing-route";
import { RockClimbingWallGeoFenceNode } from "./rock-climbing-wall-geo-fence-node";


export class RockClimbingWall {
    @QlField()
    public zoneId?: number;
    @QlField()
    public id?: number;
    @QlField()
    public englishFullName?: string;
    @QlField()
    public areaCode?: string;
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

    public area?: Area;
    public routes?: RockClimbingRoute;
    public geoFenceNodes?: RockClimbingWallGeoFenceNode[];
}