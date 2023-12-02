import { QlField } from "../../graphql-helpers";
import { AreaGeoFenceNode } from "./area-geo-fence-node";
import { RockClimbingWall } from "./rock-climbing-wall";
import { Zone } from "./zone";


export class Area {
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
    public thumbPictureBytes?: number[] | null;

    public zone?: Zone;
    public rockClimbingWalls?: RockClimbingWall[];
    public geoFenceNodes?: AreaGeoFenceNode[];
}