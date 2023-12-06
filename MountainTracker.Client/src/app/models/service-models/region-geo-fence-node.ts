import { QlField, QlIdField } from "../../graphql-helpers";
import { Region } from "./region";

export class RegionGeoFenceNode {
    @QlIdField()
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