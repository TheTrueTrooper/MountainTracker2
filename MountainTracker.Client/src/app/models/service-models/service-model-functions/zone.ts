import { Zone } from '../zone';
   
export function sortByName(a: Zone, b: Zone): number {
    try
    {
        return a.englishFullName!.localeCompare(b.englishFullName!);
    }
    catch
    {
        return 0
    }
}

export function sortByCode(a: Zone, b: Zone): number {
    try
    {
        return a.zoneCode!.localeCompare(b.zoneCode!);
    }
    catch
    {
        return 0
    }
}

export function sortByid(a: Zone, b: Zone): number {
    try
    {
        return a.id! - b.id!;
    }
    catch
    {
        return 0
    }
}

export function genericSort(a: Zone, b: Zone): number {
    return sortByid(a,b) ?? sortByName(a, b) ?? sortByCode(a,b);
}