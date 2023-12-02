import { QlField } from "../../graphql-helpers";
import { Region } from "./region";

export class RegionGeoFenceNode {

    @QlField()
    public id?: number;
    @QlField()
    public regionId?: number;
    @QlField()
    public latitude?: number;
    @QlField()
    public longitude?: number;
      
    public region?: Region;
}