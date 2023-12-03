import { RockClimbingWallGeoFenceNode } from '../rock-climbing-wall-geo-fence-node';

export function selectRockClimbingWallGeoFenceNodeId(a: RockClimbingWallGeoFenceNode): number {
    return a.id!;
}
   
export function sortByAreaId(a: RockClimbingWallGeoFenceNode, b: RockClimbingWallGeoFenceNode): number {
    try
    {
        return a.climbingWallId! - b.climbingWallId!;
    }
    catch
    {
        return 0
    }
}

export function sortByid(a: RockClimbingWallGeoFenceNode, b: RockClimbingWallGeoFenceNode): number {
    try
    {
        return a.id! - b.id!;
    }
    catch
    {
        return 0
    }
}

export function genericSort(a: RockClimbingWallGeoFenceNode, b: RockClimbingWallGeoFenceNode): number {
    return sortByid(a,b) ?? sortByAreaId(a,b);
}