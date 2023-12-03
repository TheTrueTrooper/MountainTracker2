import { ProvinceOrState } from '../province-or-state';
   
export function sortByName(a: ProvinceOrState, b: ProvinceOrState): number {
    try
    {
        return a.englishFullName!.localeCompare(b.englishFullName!);
    }
    catch
    {
        return 0
    }
}

export function sortByCode(a: ProvinceOrState, b: ProvinceOrState): number {
    try
    {
        return a.regionCode!.localeCompare(b.regionCode!);
    }
    catch
    {
        return 0
    }
}

export function sortByid(a: ProvinceOrState, b: ProvinceOrState): number {
    try
    {
        return a.id! - b.id!;
    }
    catch
    {
        return 0
    }
}

export function genericSort(a: ProvinceOrState, b: ProvinceOrState): number {
    return sortByid(a,b) ?? sortByName(a, b) ?? sortByCode(a,b);
}