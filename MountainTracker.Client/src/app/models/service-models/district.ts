import { QlField } from "../../graphql-helpers";
import { DistrictGeoFenceNode } from "./district-geo-fence-node";
import { Region } from "./region";
import { Zone } from "./zones";


export class District {
    @QlField()
    public regionId?: number;
    @QlField()
    public id?: number;
    @QlField()
    public englishFullName?: string;
    @QlField()
    public districtCode?: string;
    @QlField()
    public info?: String | null;
    @QlField()
    public latitudeStartOrCenter?: number | null;
    @QlField()
    public longitudeStartOrCenter?: number | null;
    @QlField()
    public thumbPictureBytes?: number[] | null;

    public region?: Region;
    public zones?: Zone[];
    public geoFenceNodes?: DistrictGeoFenceNode[];
}