import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { AdminRegion } from '../../../../models';

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
  displayedColumns: ('rowNo' | 'id'| 'regionCode' | 'englishFullName' |'provinceOrStateId' | 'latitudeStartOrCenter' | 'longitudeStartOrCenter' | 'thumbPictureBytes')[]  
    = ['rowNo', 'id', 'regionCode', 'englishFullName', 'provinceOrStateId', 'latitudeStartOrCenter', 'longitudeStartOrCenter', 'thumbPictureBytes'];
  @Input()
  selectRegionLabel: string = 'Select a Province or State';
  @Input()
  noSelectRegionLabel: string = 'Select a Province or State';
  @Input()
  selectedProvinceOrStateId: number | null = null;
  @Input()
  selected: string | null = null;
  @Input()
  cardIcon!: IconDefinition;

  @Output()
  regionSelected: EventEmitter<number | null> = new EventEmitter<number | null>()
}