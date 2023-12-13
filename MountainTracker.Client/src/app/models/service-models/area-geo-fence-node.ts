import { QlField, QlIdField } from "../../graphql-helpers"
import { Area } from "./area";

export class AreaGeoFenceNode {

    @QlIdField()
    @QlField()
    public id?: number;
    @QlField()
    public areaId?: number;
    @QlField()
    public latitude?: number;
    @QlField()
    public longitude?: number;
    
    public area?: Area;
}