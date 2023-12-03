import { QlField } from "../../graphql-helpers"
import { Zone } from "./zone";

export class ZoneGeoFenceNode {

    @QlField()
    public id?: number;
    @QlField()
    public zoneId?: number;
    @QlField()
    public latitude?: number;
    @QlField()
    public longitude?: number;
      
    public zone?: Zone;
}