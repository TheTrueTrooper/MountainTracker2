import { QlField } from "../../graphql-helpers"
import { District } from "./district";

export class DistrictGeoFenceNode {

    @QlField()
    public id?: number;
    @QlField()
    public districtId?: number;
    @QlField()
    public latitude?: number;
    @QlField()
    public longitude?: number;
      
    public district?: District;
}