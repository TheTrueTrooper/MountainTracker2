import { RockClimbingRoute } from '../rock-climbing-route';
   
export function sortByName(a: RockClimbingRoute, b: RockClimbingRoute): number {
    try
    {
        return a.englishFullName!.localeCompare(b.englishFullName!);
    }
    catch
    {
        return 0
    }
}

export function sortByCode(a: RockClimbingRoute, b: RockClimbingRoute): number {
    try
    {
        return a.routeCode!.localeCompare(b.routeCode!);
    }
    catch
    {
        return 0
    }
}

export function sortByid(a: RockClimbingRoute, b: RockClimbingRoute): number {
    try
    {
        return a.id! - b.id!;
    }
    catch
    {
        return 0
    }
}

export function genericSort(a: RockClimbingRoute, b: RockClimbingRoute): number {
    return sortByid(a,b) ?? sortByName(a, b) ?? sortByCode(a,b);
}