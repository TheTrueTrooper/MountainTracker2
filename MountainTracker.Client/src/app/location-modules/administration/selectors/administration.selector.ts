import { createSelector } from '@ngrx/store';
import { selectSelectedCountryId as selectSelectedCountryIdOrg } from '../reducers';
import { selectors } from '../../../services/entity-state-services';
import { AdminCountry, AdminProvinceOrState, Country } from '../../../models';
import { genericSort as countrySort } from '../../../models/service-models/service-model-functions/country';
import { genericSort as provinceOrStateSort } from '../../../models/service-models/service-model-functions/province-or-state';

const allCountriesToAdminCountries = (countries: Country[])=>{
    return countries.map(country=>{
        const adminCountry: AdminCountry = {
            ...country,
            selectLabel: `${country.countryCode}-${country.englishFullName}`
        };
        return adminCountry as AdminCountry;
    })
    .sort((a,b)=>{
        return a.countryCode === 'CA' ? -1 : a.countryCode === 'US' ? -1 : countrySort(a,b);
    })
}

const allProvinceOrStateToAdminProvinceOrState = (provinceOrState: AdminProvinceOrState[])=>{
    return provinceOrState.map(provinceOrState=>{
        const adminProvinceOrState: AdminProvinceOrState = {
            ...provinceOrState,
            selectLabel: `${provinceOrState.regionCode}-${provinceOrState.englishFullName}`
        };
        return adminProvinceOrState as AdminProvinceOrState;
    })
    .sort((a,b)=>{
        return provinceOrStateSort(a,b);
    })
}

export const selectSelectedCountryId = selectSelectedCountryIdOrg;


export const selectSelection = createSelector(
    selectSelectedCountryId,
    selectors.selectAllCountries,
    selectors.selectCountryEntities,
    selectors.selectAllProvincesOrStates,
    (selectedCountryId, allCountries, countries, provinceOrState)=>{
        if(!selectedCountryId)
        {
            return allCountriesToAdminCountries(allCountries);
        }
        else
        {
            const country: AdminCountry = {
                ...countries[selectedCountryId],
                selectLabel: `${countries[selectedCountryId]?.countryCode}-${countries[selectedCountryId]?.englishFullName}`
            };
            country!.provincesOrStates = provinceOrState.filter(x=>x.countryId === selectedCountryId) ?? null
            country!.provincesOrStatesAsAdmin = country!.provincesOrStates ? allProvinceOrStateToAdminProvinceOrState(country!.provincesOrStates) : null;
            return [country as AdminCountry];
        }
    }
)

export const selectCountries = createSelector(
    selectors.selectAllCountries,
    countries=>allCountriesToAdminCountries(countries)
)

export const selectProvincesOrStates = createSelector(
    selectSelectedCountryId,
    selectors.selectAllProvincesOrStates,
    (selectedCountryId, provincesOrStates)=>allProvinceOrStateToAdminProvinceOrState(provincesOrStates.filter(provinceOrState=>provinceOrState.countryId === selectedCountryId))
)