import { RockClimbingWall } from '../rock-climbing-wall';

export function selectRockClimbingWallId(a: RockClimbingWall): number {
    return a.id!;
}
   
export function sortByName(a: RockClimbingWall, b: RockClimbingWall): number {
    try
    {
        return a.englishFullName!.localeCompare(b.englishFullName!);
    }
    catch
    {
        return 0
    }
}

export function sortByCode(a: RockClimbingWall, b: RockClimbingWall): number {
    try
    {
        return a.wallCode!.localeCompare(b.wallCode!);
    }
    catch
    {
        return 0
    }
}

export function sortByid(a: RockClimbingWall, b: RockClimbingWall): number {
    try
    {
        return a.id! - b.id!;
    }
    catch
    {
        return 0
    }
}

export function genericSort(a: RockClimbingWall, b: RockClimbingWall): number {
    return sortByid(a,b) ?? sortByName(a, b) ?? sortByCode(a,b);
}