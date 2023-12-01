import { QlField } from "../../graphql-helpers"
import { Area } from "./area";

export class AreaGeoFenceNode {

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