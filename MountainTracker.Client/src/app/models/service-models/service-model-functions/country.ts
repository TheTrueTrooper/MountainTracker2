import { Country } from '../country';
   
export function sortByName(a: Country, b: Country): number {
    try
    {
        return a.englishFullName!.localeCompare(b.englishFullName!);
    }
    catch
    {
        return 0
    }
}

export function sortByCode(a: Country, b: Country): number {
    try
    {
        return a.countryCode!.localeCompare(b.countryCode!);
    }
    catch
    {
        return 0
    }
}

export function sortByid(a: Country, b: Country): number {
    try
    {
        return a.id! - b.id!;
    }
    catch
    {
        return 0
    }
}

export function genericSort(a: Country, b: Country): number {
    return sortByid(a,b) ?? sortByName(a, b) ?? sortByCode(a,b);
}