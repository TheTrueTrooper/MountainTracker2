import { createSelector } from '@ngrx/store';
import { 
    selectSelectedCountryId as selectSelectedCountryIdOrg,
    selectSelectedProvinceOrStateId as selectSelectedProvinceOrStateIdOrg,
    selectSelectedRegionId as selectSelectedRegionIdOrg,
    selectSelectedDistrictId as selectSelectedDistrictIdOrg
} from '../reducers';
import { selectors } from '../../../services/entity-state-services';
import { AdminCountry, AdminDistrict, AdminProvinceOrState, AdminRegion, Country, District, ProvinceOrState, Region } from '../../../models';
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

const allProvinceOrStateToAdminProvinceOrState = (provincesOrStates: ProvinceOrState[])=>{
    return provincesOrStates.map(provinceOrState=>{
        const adminProvinceOrState: AdminProvinceOrState = {
            ...provinceOrState,
            selectLabel: `${provinceOrState.regionCode}-${provinceOrState.englishFullName}`
        };
        return adminProvinceOrState as AdminProvinceOrState;
    })
    .sort((a,b)=>provinceOrStateSort(a,b));
}

const allRegionToAdminRegion = (regions: Region[])=>{
    return regions.map(region=>{
        const adminProvinceOrState: AdminRegion = {
            ...region,
            selectLabel: `${region.regionCode}-${region.englishFullName}`
        };
        return adminProvinceOrState as AdminRegion;
    })
    .sort((a,b)=>regionSort(a,b));
}

const allDistrictToAdminDistrict = (districts: District[])=>{
    return districts.map(district=>{
        const adminProvinceOrState: AdminRegion = {
            ...district,
            selectLabel: `${district.districtCode}-${district.englishFullName}`
        };
        return adminProvinceOrState as AdminRegion;
    })
    .sort((a,b)=>regionSort(a,b));
}

export const selectSelectedCountryId = selectSelectedCountryIdOrg;
export const selectSelectedProvinceOrStateId = selectSelectedProvinceOrStateIdOrg;
export const selectSelectedRegionId = selectSelectedRegionIdOrg;
export const selectSelectedDistrictId = selectSelectedDistrictIdOrg;

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
    (selectSelectedRegionId, Regions, allRegions)=>{
        if(selectSelectedRegionId === null)
        {
            return allRegionToAdminRegion(allRegions);
        }
        else
        {
            return allRegionToAdminRegion(Regions[selectSelectedRegionId] ? [Regions[selectSelectedRegionId]!] : [])
        }
    }
)

export const selectDistrictSelection = createSelector(
    selectSelectedDistrictId,
    selectors.selectDistrictEntities,
    selectors.selectAllDistricts,
    (selectSelectedDistrictId, districts, allDistricts)=>{
        if(selectSelectedDistrictId === null)
        {
            return allDistrictToAdminDistrict(allDistricts);
        }
        else
        {
            return allDistrictToAdminDistrict(districts[selectSelectedDistrictId] ? [districts[selectSelectedDistrictId]!] : [])
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

export const selectDistricts = createSelector(
    selectSelectedRegionId,
    selectors.selectAllDistricts,
    (selectSelectedRegionId, districts)=>allDistrictToAdminDistrict(districts.filter(district=>district.regionId === selectSelectedRegionId))
)

export const selectRegionGeoFenceNodes = createSelector(
    selectSelectedRegionId,
    selectors.selectAllRegionGeoFenceNodes,
    (selectSelectedRegionId, regions)=>regions.filter(region=>region.regionId === selectSelectedRegionId)
)

export const selectDistrictGeoFenceNodes = createSelector(
    selectSelectedDistrictId,
    selectors.selectAllDistrictGeoFenceNodes,
    (selectSelectedDistrictId, regions)=>regions.filter(region=>region.districtId === selectSelectedDistrictId)
)