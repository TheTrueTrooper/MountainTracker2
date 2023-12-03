import { RockClimbingType } from '../rock-climbing-type';
   
export function sortByName(a: RockClimbingType, b: RockClimbingType): number {
    try
    {
        return a.englishFullName!.localeCompare(b.englishFullName!);
    }
    catch
    {
        return 0
    }
}

export function sortByid(a: RockClimbingType, b: RockClimbingType): number {
    try
    {
        return a.id! - b.id!;
    }
    catch
    {
        return 0
    }
}

export function genericSort(a: RockClimbingType, b: RockClimbingType): number {
    return sortByid(a,b) ?? sortByName(a, b);
}