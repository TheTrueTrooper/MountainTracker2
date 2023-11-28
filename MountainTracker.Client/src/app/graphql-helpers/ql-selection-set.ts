export class QlSelectionSet{
    name?: string;
    args?: {[key: string]: string | number};
    fields!: string[];
    subSet?: QlSelectionSet[];
}