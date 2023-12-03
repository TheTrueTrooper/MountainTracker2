import { QlField, QlIdField } from "../../graphql-helpers";
import { Country } from "./country";
import { Region } from "./region";

export class ProvinceOrState
{
    @QlIdField()
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