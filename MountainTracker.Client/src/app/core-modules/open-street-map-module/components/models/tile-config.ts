import { TargetOSMap } from "./target-osmap";

export class TileConfig
{
    maxZoom: number;
    minZoom: number;
    attribution?: string;

    constructor(maxZoom: number, minZoom: number, attribution?: string)
    {
        this.maxZoom=maxZoom;
        this.minZoom=minZoom;
        this.attribution=attribution;
    }
}
