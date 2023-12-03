import { BusyRating } from '../busy-rating';

export function selectBusyRatingId(a: BusyRating): number {
    return a.id!;
}
   
export function sortByName(a: BusyRating, b: BusyRating): number {
    try
    {
        return a.englishName!.localeCompare(b.englishName!);
    }
    catch
    {
        return 0
    }
}

export function sortByid(a: BusyRating, b: BusyRating): number {
    try
    {
        return a.id! - b.id!;
    }
    catch
    {
        return 0
    }
}

export function genericSort(a: BusyRating, b: BusyRating): number {
    return sortByid(a,b) ?? sortByName(a, b);
}