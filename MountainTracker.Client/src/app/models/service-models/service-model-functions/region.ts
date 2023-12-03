import { Region } from '../region';

export function selectRegionId(a: Region): number {
    return a.id!;
}
   
export function sortByName(a: Region, b: Region): number {
    try
    {
        return a.englishFullName!.localeCompare(b.englishFullName!);
    }
    catch
    {
        return 0
    }
}

export function sortByCode(a: Region, b: Region): number {
    try
    {
        return a.regionCode!.localeCompare(b.regionCode!);
    }
    catch
    {
        return 0
    }
}

export function sortByid(a: Region, b: Region): number {
    try
    {
        return a.id! - b.id!;
    }
    catch
    {
        return 0
    }
}

export function genericSort(a: Region, b: Region): number {
    return sortByid(a,b) ?? sortByName(a, b) ?? sortByCode(a,b);
}