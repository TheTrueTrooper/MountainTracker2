import { RockClimbingDifficulty } from '../rock-climbing-difficulty';
   
export function sortByName(a: RockClimbingDifficulty, b: RockClimbingDifficulty): number {
    try
    {
        return a.englishCode!.localeCompare(b.englishCode!);
    }
    catch
    {
        return 0
    }
}

export function sortByid(a: RockClimbingDifficulty, b: RockClimbingDifficulty): number {
    try
    {
        return a.id! - b.id!;
    }
    catch
    {
        return 0
    }
}

export function genericSort(a: RockClimbingDifficulty, b: RockClimbingDifficulty): number {
    return sortByid(a,b) ?? sortByName(a, b);
}