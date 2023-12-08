import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { AdminRegion, RegionGeoFenceNode } from '../../../../models';

@Component({
  selector: 'region-edit',
  templateUrl: './region-edit.component.html',
  styleUrl: './region-edit.component.scss',
  host:{'class':'container-fluid'}
})
export class RegionEditComponent {
  @Input()
  public set selectRegionOptions(value: AdminRegion[] | null | undefined)
  {
    this._selectRegionOptions = value ?? [];
  }
  protected _selectRegionOptions: AdminRegion[] = [];
  @Input()
  public set selectedRegionOptions(value: AdminRegion[] | null | undefined)
  {
    this._selectedRegionOptions = value ?? [];
  }
  protected _selectedRegionOptions: AdminRegion[] = [];
  @Input()
  public set selectedRegionGeoFenceNodeOptions(value: RegionGeoFenceNode[] | null | undefined)
  {
    this._selectedRegionGeoFenceNodeOptions = value ?? [];
  }
  protected _selectedRegionGeoFenceNodeOptions: RegionGeoFenceNode[] = [];
  @Input()
  regionDisplayedColumns: ('rowNo' | 'id'| 'regionCode' | 'englishFullName' |'provinceOrStateId' | 'latitudeStartOrCenter' | 'longitudeStartOrCenter' | 'thumbPictureBytes' | 'info')[]  
    = ['rowNo', 'id', 'regionCode', 'englishFullName', 'provinceOrStateId', 'latitudeStartOrCenter', 'longitudeStartOrCenter', 'thumbPictureBytes'];
  @Input()
  geoFenceDisplayedColumns: ('rowNo' | 'id'| 'regionId' | 'latitude' |'longitude')[]  
    = ['rowNo', 'id', 'regionId', 'latitude', 'longitude'];
  @Input()
  selectRegionLabel: string = 'Select a Region';
  @Input()
  noSelectRegionLabel: string = 'Select a Region';
  @Input()
  selectedProvinceOrStateId: number | null = null;
  @Input()
  selectedRegionId: number | null = null;
  @Input()
  selected: string | null = null;
  @Input()
  cardIcon!: IconDefinition;

  @Output()
  regionSelected: EventEmitter<number | null> = new EventEmitter<number | null>()
}