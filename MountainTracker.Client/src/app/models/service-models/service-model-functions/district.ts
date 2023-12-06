import { District } from '../district';
   
export function sortByName(a: District, b: District): number {
    try
    {
        return a.englishFullName!.localeCompare(b.englishFullName!);
    }
    catch
    {
        return 0
    }
}

export function sortByCode(a: District, b: District): number {
    try
    {
        return a.districtCode!.localeCompare(b.districtCode!);
    }
    catch
    {
        return 0
    }
}

export function sortByid(a: District, b: District): number {
    try
    {
        return a.id! - b.id!;
    }
    catch
    {
        return 0
    }
}

export function genericSort(a: District, b: District): number {
    return sortByid(a,b) ?? sortByName(a, b) ?? sortByCode(a,b);
}