import { createSelector } from '@ngrx/store';
import { selectSelectedCountryId } from '../reducers';
import { selectors } from '../../../services/entity-state-services';
import { AdminCountry } from '../../../models';
import { genericSort } from '../../../models/service-models/service-model-functions/country';

export const selectSelection = createSelector(
    selectSelectedCountryId,
    selectors.selectCountryEntities,
    selectors.selectAllProvincesOrStates,
    (selectedCountryId, Countries, provinceOrState)=>{
        if(!selectedCountryId)
        {
            return null;
        }
        const country: AdminCountry = {
            ...Countries[selectedCountryId],
            selectLabel: `${Countries[selectedCountryId]?.countryCode}-${Countries[selectedCountryId]?.englishFullName}`
        };
        country!.provincesOrStates = provinceOrState.filter(x=>x.countryId === selectedCountryId) ?? null
        return country as AdminCountry;
    }
)

export const selectCountries = createSelector(
    selectors.selectAllCountries,
    (Countries)=>{
        return Countries.map(country=>{
            const adminCountry: AdminCountry = {
                ...country,
                selectLabel: `${country.countryCode}-${country.englishFullName}`
            };
            return adminCountry as AdminCountry;
        }).sort((a,b)=>{
            return a.countryCode === 'CA' ? -1 : a.countryCode === 'US' ? -1 : genericSort(a,b);
        })
    }
)