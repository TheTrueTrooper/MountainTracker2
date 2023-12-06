import { QlComplexField, QlComplexListField, QlField, QlIdField } from "../../graphql-helpers";
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

    @QlComplexField('countryId')
    public country?: Country;
    @QlComplexListField()
    public regions?: Region[];
}