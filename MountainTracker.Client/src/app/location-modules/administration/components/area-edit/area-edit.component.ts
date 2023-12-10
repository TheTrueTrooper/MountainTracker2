import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { AdminArea } from '../../../../models';
import { DisplayColumns as GeoDisplayColumns } from '../geo-fence-edit-table/geo-fence-edit-table.component';

@Component({
  selector: 'area-edit',
  templateUrl: './area-edit.component.html',
  styleUrl: './area-edit.component.scss',
  host:{'class':'container-fluid'}
})
export class AreaEditComponent {
  @Input()
  public set selectAreaOptions(value: AdminArea[] | null | undefined)
  {
    this._selectAreaOptions = value ?? [];
  }
  protected _selectAreaOptions: AdminArea[] = [];
  @Input()
  public set selectedAreaOptions(value: AdminArea[] | null | undefined)
  {
    this._selectedAreaOptions = value ?? [];
  }
  protected _selectedAreaOptions: AdminArea[] = [];
  @Input()
  public set selectedAreaGeoFenceNodeOptions(value: AdminArea[] | null | undefined)
  {
    this._selectedAreaGeoFenceNodeOptions = value ?? [];
  }
  protected _selectedAreaGeoFenceNodeOptions: AdminArea[] = [];
  @Input()
  areaDisplayedColumns: ('rowNo' | 'id'| 'regionCode' | 'englishFullName' |'parentId' | 'latitudeStartOrCenter' | 'longitudeStartOrCenter' | 'thumbPictureBytes' | 'info')[]  
    = ['rowNo', 'id', 'regionCode', 'englishFullName', 'parentId', 'latitudeStartOrCenter', 'longitudeStartOrCenter'];
  @Input()
  geoFenceDisplayedColumns: GeoDisplayColumns = ['rowNo', 'id', 'parentId', 'latitude', 'longitude'];
  @Input()
  selectAreaLabel: string = 'Select a Area';
  @Input()
  noSelectAreaLabel: string = 'Select a Area';
  @Input()
  selectedZoneId: number | null = null;
  @Input()
  selectedAreaId: number | null = null;
  @Input()
  selected: string | null = null;
  @Input()
  cardIcon!: IconDefinition;

  @Output()
  areaSelected: EventEmitter<number | null> = new EventEmitter<number | null>()
}