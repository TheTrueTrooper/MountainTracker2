import { DistrictGeoFenceNode } from '../district-geo-fence-node';

export function selectDistrictGeoFenceNodeId(a: DistrictGeoFenceNode): number {
    return a.id!;
}
   
export function sortByAreaId(a: DistrictGeoFenceNode, b: DistrictGeoFenceNode): number {
    try
    {
        return a.districtId! - b.districtId!;
    }
    catch
    {
        return 0
    }
}

export function sortByid(a: DistrictGeoFenceNode, b: DistrictGeoFenceNode): number {
    try
    {
        return a.id! - b.id!;
    }
    catch
    {
        return 0
    }
}

export function genericSort(a: DistrictGeoFenceNode, b: DistrictGeoFenceNode): number {
    return sortByid(a,b) ?? sortByAreaId(a,b);
}