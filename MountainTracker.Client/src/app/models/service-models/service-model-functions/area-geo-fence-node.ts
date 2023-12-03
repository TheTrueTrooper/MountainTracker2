import { AreaGeoFenceNode } from '../area-geo-fence-node';
   
export function sortByAreaId(a: AreaGeoFenceNode, b: AreaGeoFenceNode): number {
    try
    {
        return a.areaId! - b.areaId!;
    }
    catch
    {
        return 0
    }
}

export function sortByid(a: AreaGeoFenceNode, b: AreaGeoFenceNode): number {
    try
    {
        return a.id! - b.id!;
    }
    catch
    {
        return 0
    }
}

export function genericSort(a: AreaGeoFenceNode, b: AreaGeoFenceNode): number {
    return sortByid(a,b) ?? sortByAreaId(a,b);
}