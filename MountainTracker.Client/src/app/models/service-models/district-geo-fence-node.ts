import { QlField, QlIdField } from "../../graphql-helpers"
import { District } from "./district";

export class DistrictGeoFenceNode {
    @QlIdField()
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