import { createSelector } from '@ngrx/store';
import { 
    selectSelectedCountryId as selectSelectedCountryIdOrg,
    selectSelectedProvinceOrStateId as selectSelectedProvinceOrStateIdOrg,
    selectSelectedRegionId as selectSelectedRegionIdOrg,
    selectSelectedDistrictId as selectSelectedDistrictIdOrg,
    selectSelectedZoneId as selectSelectedZoneIdOrg,
    selectSelectedAreaId as selectSelectedAreaIdOrg,
    selectSelectedRockClimbingWallId as selectSelectedRockClimbingWallIdOrg,
} from '../reducers';
import { selectors } from '../../../services/entity-state-services';
import { AdminArea, AdminCountry, AdminDistrict, AdminProvinceOrState, AdminRegion, AdminRockClimbingWall, AdminZone, Area, BusyRating, ClimbingQualityRating, Country, District, ProvinceOrState, Region, RockClimbingWall, Zone } from '../../../models';
import { genericSort as countrySort } from '../../../models/service-models/service-model-functions/country';
import { genericSort as provinceOrStateSort } from '../../../models/service-models/service-model-functions/province-or-state';
import { genericSort as regionSort } from '../../../models/service-models/service-model-functions/region';
import { Dictionary } from '@ngrx/entity';

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
            selectLabel: `${provinceOrState.regionCode?.trimEnd()}-${provinceOrState.englishFullName?.trimStart()}`
        };
        return adminProvinceOrState as AdminProvinceOrState;
    })
    .sort((a,b)=>provinceOrStateSort(a,b));
}

const allRegionToAdminRegion = (regions: Region[])=>{
    return regions.map(region=>{
        const adminProvinceOrState: AdminRegion = {
            ...region,
            selectLabel: `${region.regionCode?.trimEnd()}-${region.englishFullName?.trimStart()}`
        };
        return adminProvinceOrState as AdminRegion;
    })
    .sort((a,b)=>regionSort(a,b));
}

const allDistrictToAdminDistrict = (districts: District[])=>{
    return districts.map(district=>{
        const adminProvinceOrState: AdminDistrict = {
            ...district,
            selectLabel: `${district.districtCode?.trimEnd()}-${district.englishFullName?.trimStart()}`
        };
        return adminProvinceOrState as AdminDistrict;
    })
    .sort((a,b)=>regionSort(a,b));
}

const allZoneToAdminZone = (zones: Zone[])=>{
    return zones.map(zone=>{
        const adminProvinceOrState: AdminZone = {
            ...zone,
            selectLabel: `${zone.zoneCode?.trimEnd()}-${zone.englishFullName?.trimStart()}`
        };
        return adminProvinceOrState as AdminZone;
    })
    .sort((a,b)=>regionSort(a,b));
}

const allAreaToAdminArea = (Areas: Area[])=>{
    return Areas.map(Area=>{
        const adminProvinceOrState: AdminArea = {
            ...Area,
            selectLabel: `${Area.areaCode?.trimEnd()}-${Area.englishFullName?.trimStart()}`
        };
        return adminProvinceOrState as AdminArea;
    })
    .sort((a,b)=>regionSort(a,b));
}

const allRockClimbingWallToAdminRockClimbingWall = (rockClimbingWalls: RockClimbingWall[], climbingQualityRatingEntities: Dictionary<ClimbingQualityRating>, busyRatingsEntities: Dictionary<BusyRating>)=>{
    return rockClimbingWalls.map(rockClimbingWall=>{
        const adminProvinceOrState: AdminRockClimbingWall = {
            ...rockClimbingWall,
            selectLabel: `${rockClimbingWall.wallCode?.trimEnd()}-${rockClimbingWall.englishFullName?.trimStart()}`,
            janSeasonalClimbingQualityRating: climbingQualityRatingEntities[rockClimbingWall.janSeasonalClimbingQualityRatingId!],
            febSeasonalClimbingQualityRating: climbingQualityRatingEntities[rockClimbingWall.febSeasonalClimbingQualityRatingId!],
            marSeasonalClimbingQualityRating: climbingQualityRatingEntities[rockClimbingWall.marSeasonalClimbingQualityRatingId!],
            aprSeasonalClimbingQualityRating: climbingQualityRatingEntities[rockClimbingWall.aprSeasonalClimbingQualityRatingId!],
            maySeasonalClimbingQualityRating: climbingQualityRatingEntities[rockClimbingWall.maySeasonalClimbingQualityRatingId!],
            junSeasonalClimbingQualityRating: climbingQualityRatingEntities[rockClimbingWall.junSeasonalClimbingQualityRatingId!],
            julSeasonalClimbingQualityRating: climbingQualityRatingEntities[rockClimbingWall.julSeasonalClimbingQualityRatingId!],
            augSeasonalClimbingQualityRating: climbingQualityRatingEntities[rockClimbingWall.augSeasonalClimbingQualityRatingId!],
            sepSeasonalClimbingQualityRating: climbingQualityRatingEntities[rockClimbingWall.sepSeasonalClimbingQualityRatingId!],
            octSeasonalClimbingQualityRating: climbingQualityRatingEntities[rockClimbingWall.octSeasonalClimbingQualityRatingId!],
            novSeasonalClimbingQualityRating: climbingQualityRatingEntities[rockClimbingWall.novSeasonalClimbingQualityRatingId!],
            decSeasonalClimbingQualityRating: climbingQualityRatingEntities[rockClimbingWall.decSeasonalClimbingQualityRatingId!],
            janSeasonalBusyRating: busyRatingsEntities[rockClimbingWall.janSeasonalBusyRatingId!],
            febSeasonalBusyRating: busyRatingsEntities[rockClimbingWall.febSeasonalBusyRatingId!],
            marSeasonalBusyRating: busyRatingsEntities[rockClimbingWall.marSeasonalBusyRatingId!],
            aprSeasonalBusyRating: busyRatingsEntities[rockClimbingWall.aprSeasonalBusyRatingId!],
            maySeasonalBusyRating: busyRatingsEntities[rockClimbingWall.maySeasonalBusyRatingId!],
            junSeasonalBusyRating: busyRatingsEntities[rockClimbingWall.junSeasonalBusyRatingId!],
            julSeasonalBusyRating: busyRatingsEntities[rockClimbingWall.julSeasonalBusyRatingId!],
            augSeasonalBusyRating: busyRatingsEntities[rockClimbingWall.augSeasonalBusyRatingId!],
            sepSeasonalBusyRating: busyRatingsEntities[rockClimbingWall.sepSeasonalBusyRatingId!],
            octSeasonalBusyRating: busyRatingsEntities[rockClimbingWall.octSeasonalBusyRatingId!],
            novSeasonalBusyRating: busyRatingsEntities[rockClimbingWall.novSeasonalBusyRatingId!],
            decSeasonalBusyRating: busyRatingsEntities[rockClimbingWall.decSeasonalBusyRatingId!]
        };
        return adminProvinceOrState as AdminRockClimbingWall;
    })
    .sort((a,b)=>regionSort(a,b));
}


export const selectSelectedCountryId = selectSelectedCountryIdOrg;
export const selectSelectedProvinceOrStateId = selectSelectedProvinceOrStateIdOrg;
export const selectSelectedRegionId = selectSelectedRegionIdOrg;
export const selectSelectedDistrictId = selectSelectedDistrictIdOrg;
export const selectSelectedZoneId = selectSelectedZoneIdOrg;
export const selectSelectedAreaId = selectSelectedAreaIdOrg;
export const selectSelectedRockClimbingWallId = selectSelectedRockClimbingWallIdOrg;

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

export const selectZoneSelection = createSelector(
    selectSelectedZoneId,
    selectors.selectZoneEntities,
    selectors.selectAllZones,
    (selectSelectedDistrictId, zones, allZones)=>{
        if(selectSelectedDistrictId === null)
        {
            return allZoneToAdminZone(allZones);
        }
        else
        {
            return allZoneToAdminZone(zones[selectSelectedDistrictId] ? [zones[selectSelectedDistrictId]!] : [])
        }
    }
)

export const selectAreaSelection = createSelector(
    selectSelectedAreaId,
    selectors.selectAreaEntities,
    selectors.selectAllAreas,
    (selectSelectedAreaId, areas, allAreas)=>{
        if(selectSelectedAreaId === null)
        {
            return allAreaToAdminArea(allAreas);
        }
        else
        {
            return allAreaToAdminArea(areas[selectSelectedAreaId] ? [areas[selectSelectedAreaId]!] : [])
        }
    }
)

export const selectRockClimbingWallSelection = createSelector(
    selectSelectedAreaId,
    selectors.selectRockClimbingWallEntities,
    selectors.selectClimbingQualityRatingEntities,
    selectors.selectBusyRatingEntities,
    selectors.selectAllRockClimbingWalls,
    (selectSelectedAreaId, rockClimbingWalls, climbingQualityRatingEntities, busyRatingsEntities, allRockClimbingWalls)=>{
        if(selectSelectedAreaId === null)
        {
            return allRockClimbingWallToAdminRockClimbingWall(allRockClimbingWalls, climbingQualityRatingEntities, busyRatingsEntities);
        }
        else
        {
            return allRockClimbingWallToAdminRockClimbingWall(rockClimbingWalls[selectSelectedAreaId] ? [rockClimbingWalls[selectSelectedAreaId]!] : [], climbingQualityRatingEntities, busyRatingsEntities)
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
    (selectedCountryId, provincesOrStates)=>
    allProvinceOrStateToAdminProvinceOrState(provincesOrStates.filter(provinceOrState=>provinceOrState.countryId === selectedCountryId))
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

export const selectZones = createSelector(
    selectSelectedDistrictId,
    selectors.selectAllZones,
    (selectSelectedDistrictId, zones)=>allZoneToAdminZone(zones.filter(zone=>zone.districtId === selectSelectedDistrictId))
)

export const selectAreas = createSelector(
    selectSelectedZoneId,
    selectors.selectAllAreas,
    (selectSelectedZoneId, areas)=>allAreaToAdminArea(areas.filter(area=>area.zoneId === selectSelectedZoneId))
)

export const selectRockClimbingWalls = createSelector(
    selectSelectedAreaId,
    selectors.selectClimbingQualityRatingEntities,
    selectors.selectBusyRatingEntities,
    selectors.selectAllRockClimbingWalls,
    (selectSelectedAreaId, climbingQualityRatingEntities, busyRatingsEntities, rockClimbingWalls)=>
        allRockClimbingWallToAdminRockClimbingWall(rockClimbingWalls.filter(rockClimbingWall=>rockClimbingWall.areaId === selectSelectedAreaId), climbingQualityRatingEntities, busyRatingsEntities)
)

export const selectRegionGeoFenceNodes = createSelector(
    selectSelectedRegionId,
    selectors.selectAllRegionGeoFenceNodes,
    (selectSelectedRegionId, geoFences)=>geoFences.filter(geoFence=>geoFence.regionId === selectSelectedRegionId)
)

export const selectDistrictGeoFenceNodes = createSelector(
    selectSelectedDistrictId,
    selectors.selectAllDistrictGeoFenceNodes,
    (selectSelectedDistrictId, geoFences)=>geoFences.filter(geoFence=>geoFence.districtId === selectSelectedDistrictId)
)

export const selectZoneGeoFenceNodes = createSelector(
    selectSelectedZoneId,
    selectors.selectAllZoneGeoFenceNodes,
    (selectSelectedZoneId, geoFences)=>geoFences.filter(geoFence=>geoFence.zoneId === selectSelectedZoneId)
)

export const selectAreaGeoFenceNodes = createSelector(
    selectSelectedAreaId,
    selectors.selectAllAreaGeoFenceNodes,
    (selectSelectedAreaId, geoFences)=>geoFences.filter(geoFence=>geoFence.areaId === selectSelectedAreaId)
)

export const selectRockClimbingWallGeoFenceNodes = createSelector(
    selectSelectedRockClimbingWallId,
    selectors.selectAllRockClimbingWallGeoFenceNodes,
    (selectSelectedRockClimbingWallId, geoFences)=>geoFences.filter(geoFence=>geoFence.climbingWallId === selectSelectedRockClimbingWallId)
)