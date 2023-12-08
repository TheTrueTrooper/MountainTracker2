import { createSelector } from '@ngrx/store';
import { 
    selectSelectedCountryId as selectSelectedCountryIdOrg,
    selectSelectedProvinceOrStateId as selectSelectedProvinceOrStateIdOrg,
    selectSelectedRegionId as selectSelectedRegionIdOrg
} from '../reducers';
import { selectors } from '../../../services/entity-state-services';
import { AdminCountry, AdminProvinceOrState, AdminRegion, Country } from '../../../models';
import { genericSort as countrySort } from '../../../models/service-models/service-model-functions/country';
import { genericSort as provinceOrStateSort } from '../../../models/service-models/service-model-functions/province-or-state';
import { genericSort as regionSort } from '../../../models/service-models/service-model-functions/region';

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
    });
}

const allProvinceOrStateToAdminProvinceOrState = (provincesOrStates: AdminProvinceOrState[])=>{
    return provincesOrStates.map(provinceOrState=>{
        const adminProvinceOrState: AdminProvinceOrState = {
            ...provinceOrState,
            selectLabel: `${provinceOrState.regionCode}-${provinceOrState.englishFullName}`
        };
        return adminProvinceOrState as AdminProvinceOrState;
    })
    .sort((a,b)=>provinceOrStateSort(a,b));
}

const allRegionToAdminRegion = (regions: AdminRegion[])=>{
    return regions.map(region=>{
        const adminProvinceOrState: AdminRegion = {
            ...region,
            selectLabel: `${region.regionCode}-${region.englishFullName}`
        };
        return adminProvinceOrState as AdminRegion;
    })
    .sort((a,b)=>regionSort(a,b));
}

export const selectSelectedCountryId = selectSelectedCountryIdOrg;
export const selectSelectedProvinceOrStateId = selectSelectedProvinceOrStateIdOrg;
export const selectSelectedRegionId = selectSelectedRegionIdOrg;


export const selectCountrySelection = createSelector(
    selectSelectedCountryId,
    selectors.selectCountryEntities,
    selectors.selectAllCountries,
    (selectedCountryId, countries, allCountries)=>{
        if(selectedCountryId === null)
        {
            return allCountriesToAdminCountries(allCountries);
        }
        else
        {
            return allCountriesToAdminCountries(countries[selectedCountryId] ? [countries[selectedCountryId]!] : [])
        }
    }
)

export const selectProvinceOrStateSelection = createSelector(
    selectSelectedProvinceOrStateId,
    selectors.selectProvinceOrStateEntities,
    selectors.selectAllProvincesOrStates,
    (selectedCountryId, ProvincesOrStates, allProvincesOrStates)=>{
        if(selectedCountryId === null)
        {
            return allProvinceOrStateToAdminProvinceOrState(allProvincesOrStates);
        }
        else
        {
            return allProvinceOrStateToAdminProvinceOrState(ProvincesOrStates[selectedCountryId] ? [ProvincesOrStates[selectedCountryId]!] : [])
        }
    }
)

export const selectRegionSelection = createSelector(
    selectSelectedRegionId,
    selectors.selectRegionEntities,
    selectors.selectAllRegions,
    (selectedCountryId, ProvincesOrStates, allProvincesOrStates)=>{
        if(selectedCountryId === null)
        {
            return allRegionToAdminRegion(allProvincesOrStates);
        }
        else
        {
            return allRegionToAdminRegion(ProvincesOrStates[selectedCountryId] ? [ProvincesOrStates[selectedCountryId]!] : [])
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

export const selectRegions = createSelector(
    selectSelectedProvinceOrStateId,
    selectors.selectAllRegions,
    (selectedProvinceOrStateId, regions)=>allRegionToAdminRegion(regions.filter(region=>region.provinceOrStateId === selectedProvinceOrStateId))
)

export const selectRegionGeoFenceNodes = createSelector(
    selectSelectedRegionId,
    selectors.selectAllRegionGeoFenceNodes,
    (selectSelectedRegionId, regions)=>regions.filter(region=>region.regionId === selectSelectedRegionId)
)