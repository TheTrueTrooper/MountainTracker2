import { QlField } from "../../graphql-helpers";
import { Country } from "./country";
import { Region } from "./region";

export class ProvinceOrState
{
    @QlField()
    public countryId?: number;
    @QlField()
    public id?: number;
    @QlField()
    public englishFullName?: string;
    @QlField()
    public regionCode?: string;

    public country?: Country;
    public regions?: Region[];
}