import { ZoneGeoFenceNode } from '../zone-geo-fence-node';
   
export function sortByAreaId(a: ZoneGeoFenceNode, b: ZoneGeoFenceNode): number {
    try
    {
        return a.zoneId! - b.zoneId!;
    }
    catch
    {
        return 0
    }
}

export function sortByid(a: ZoneGeoFenceNode, b: ZoneGeoFenceNode): number {
    try
    {
        return a.id! - b.id!;
    }
    catch
    {
        return 0
    }
}

export function genericSort(a: ZoneGeoFenceNode, b: ZoneGeoFenceNode): number {
    return sortByid(a,b) ?? sortByAreaId(a,b);
}