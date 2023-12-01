import { QlField } from "../../graphql-helpers";
import { Region } from "./region";

export class District
{
    @QlField()
    public regionId?: number;
    @QlField()
    public id?: number;
    @QlField()
    public englishFullName?: string;
    @QlField()
    public districtCode?: string;

    public region?: Region;
    
}