import { QlField } from "../../graphql-helpers";
import { District } from "./district";
import { ProvinceOrState } from "./province-or-state";
import { RegionGeoFenceNode } from "./region-geo-fence-node";

export class Region
{
    @QlField()
    public provinceOrStateId?: number;
    @QlField()
    public id?: number;
    @QlField()
    public englishFullName?: string;
    @QlField()
    public regionCode?: string;
    @QlField()
    public info?: String | null;
    @QlField()
    public latitudeStartOrCenter?: number | null;
    @QlField()
    public longitudeStartOrCenter?: number | null;
    @QlField()
    public thumbPictureBytes?: number[] | null;

    public provinceOrState?: ProvinceOrState;
    public districts?: District[];
    public geoFenceNodes?: RegionGeoFenceNode[];
}