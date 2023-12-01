export class QlSelectionSet{
    name?: string;
    args?: {[key: string]: string | number};
    fields!: string[];
    subSet?: QlSelectionSet[] | QlSelectionSetTyped<any, any>[];
}

export class QlSelectionSetTyped<Parent, Child>{
    name?: (keyof Parent);
    args?: {[key: string]: string | number};
    fields!: (keyof Child)[];
    subSet?: QlSelectionSet[] | QlSelectionSetTyped<Child, any>[];
}