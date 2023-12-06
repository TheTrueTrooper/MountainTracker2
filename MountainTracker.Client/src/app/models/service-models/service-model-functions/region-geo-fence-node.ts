import { RegionGeoFenceNode } from '../region-geo-fence-node';
   
export function sortByAreaId(a: RegionGeoFenceNode, b: RegionGeoFenceNode): number {
    try
    {
        return a.regionId! - b.regionId!;
    }
    catch
    {
        return 0
    }
}

export function sortByid(a: RegionGeoFenceNode, b: RegionGeoFenceNode): number {
    try
    {
        return a.id! - b.id!;
    }
    catch
    {
        return 0
    }
}

export function genericSort(a: RegionGeoFenceNode, b: RegionGeoFenceNode): number {
    return sortByid(a,b) ?? sortByAreaId(a,b);
}