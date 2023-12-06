import { Area } from '../area';
   
export function sortByName(a: Area, b: Area): number {
    try
    {
        return a.englishFullName!.localeCompare(b.englishFullName!);
    }
    catch
    {
        return 0
    }
}

export function sortByCode(a: Area, b: Area): number {
    try
    {
        return a.areaCode!.localeCompare(b.areaCode!);
    }
    catch
    {
        return 0
    }
}

export function sortByid(a: Area, b: Area): number {
    try
    {
        return a.id! - b.id!;
    }
    catch
    {
        return 0
    }
}

export function genericSort(a: Area, b: Area): number {
    return sortByid(a,b) ?? sortByName(a, b) ?? sortByCode(a,b);
}