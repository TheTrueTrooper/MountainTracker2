import { QlField, QlIdField } from "../../graphql-helpers";
import { Area } from "./area";
import { District } from "./district";
import { ZoneGeoFenceNode } from "./zone-geo-fence-node";


export class Zone {
    @QlField()
    public districtId?: number;
    @QlIdField()
    @QlField()
    public id?: number;
    @QlField()
    public englishFullName?: string;
    @QlField()
    public zoneCode?: string;
    @QlField()
    public info?: String | null;
    @QlField()
    public latitudeStartOrCenter?: number | null;
    @QlField()
    public longitudeStartOrCenter?: number | null;
    @QlField()
    public thumbPictureBytes?: number[] | null;

    public district?: District;
    public areas?: Area[];
    public geoFenceNodes?: ZoneGeoFenceNode[];
}