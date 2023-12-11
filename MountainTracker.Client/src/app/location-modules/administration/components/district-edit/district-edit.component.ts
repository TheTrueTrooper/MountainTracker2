import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { AdminDistrict } from '../../../../models';
import { GeoDisplayColumns } from '../geo-fence-edit-table/geo-fence-edit-table.component';

@Component({
  selector: 'district-edit',
  templateUrl: './district-edit.component.html',
  styleUrl: './district-edit.component.scss'
})
export class DistrictEditComponent {
  @Input()
  public set selectDistrictOptions(value: AdminDistrict[] | null | undefined)
  {
    this._selectDistrictOptions = value ?? [];
  }
  protected _selectDistrictOptions: AdminDistrict[] = [];
  @Input()
  public set selectedDistrictOptions(value: AdminDistrict[] | null | undefined)
  {
    this._selectedDistrictOptions = value ?? [];
  }
  protected _selectedDistrictOptions: AdminDistrict[] = [];
  @Input()
  public set selectedDistrictGeoFenceNodeOptions(value: AdminDistrict[] | null | undefined)
  {
    this._selectedDistrictGeoFenceNodeOptions = value ?? [];
  }
  protected _selectedDistrictGeoFenceNodeOptions: AdminDistrict[] = [];
  @Input()
  districtDisplayedColumns: ('rowNo' | 'id'| 'regionCode' | 'englishFullName' |'parentId' | 'latitudeStartOrCenter' | 'longitudeStartOrCenter' | 'thumbPictureBytes' | 'info')[]  
    = ['rowNo', 'id', 'regionCode', 'englishFullName', 'parentId', 'latitudeStartOrCenter', 'longitudeStartOrCenter'];
  @Input()
  geoFenceDisplayedColumns: GeoDisplayColumns  = ['rowNo', 'id', 'parentId', 'latitude', 'longitude'];
  @Input()
  selectDistrictLabel: string = 'Select a District';
  @Input()
  noSelectDistrictLabel: string = 'Select a District';
  @Input()
  selectedDistrictId: number | null = null;
  @Input()
  selectedRegionId: number | null = null;
  @Input()
  selected: string | null = null;
  @Input()
  cardIcon!: IconDefinition;

  @Output()
  districtSelected: EventEmitter<number | null> = new EventEmitter<number | null>()
}