import { ClimbingQualityRating } from '../climbing-quality-rating';
   
export function sortByName(a: ClimbingQualityRating, b: ClimbingQualityRating): number {
    try
    {
        return a.englishName!.localeCompare(b.englishName!);
    }
    catch
    {
        return 0
    }
}

export function sortByid(a: ClimbingQualityRating, b: ClimbingQualityRating): number {
    try
    {
        return a.id! - b.id!;
    }
    catch
    {
        return 0
    }
}

export function genericSort(a: ClimbingQualityRating, b: ClimbingQualityRating): number {
    return sortByid(a,b) ?? sortByName(a, b);
}