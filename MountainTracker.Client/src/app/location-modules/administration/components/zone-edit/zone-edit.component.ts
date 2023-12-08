import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AdminZone } from '../../../../models';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'zone-edit',
  templateUrl: './zone-edit.component.html',
  styleUrl: './zone-edit.component.scss',
  host:{'class':'container-fluid'}
})
export class ZoneEditComponent {
  @Input()
  public set selectZoneOptions(value: AdminZone[] | null | undefined)
  {
    this._selectZoneOptions = value ?? [];
  }
  protected _selectZoneOptions: AdminZone[] = [];
  @Input()
  public set selectedZoneOptions(value: AdminZone[] | null | undefined)
  {
    this._selectedZoneOptions = value ?? [];
  }
  protected _selectedZoneOptions: AdminZone[] = [];
  @Input()
  public set selectedZoneGeoFenceNodeOptions(value: AdminZone[] | null | undefined)
  {
    this._selectedZoneGeoFenceNodeOptions = value ?? [];
  }
  protected _selectedZoneGeoFenceNodeOptions: AdminZone[] = [];
  @Input()
  zoneDisplayedColumns: ('rowNo' | 'id'| 'regionCode' | 'englishFullName' |'parentId' | 'latitudeStartOrCenter' | 'longitudeStartOrCenter' | 'thumbPictureBytes' | 'info')[]  
    = ['rowNo', 'id', 'regionCode', 'englishFullName', 'parentId', 'latitudeStartOrCenter', 'longitudeStartOrCenter'];
  @Input()
  geoFenceDisplayedColumns: ('rowNo' | 'id'| 'parentId' | 'latitude' |'longitude')[]  
    = ['rowNo', 'id', 'parentId', 'latitude', 'longitude'];
  @Input()
  selectZoneLabel: string = 'Select a Zone';
  @Input()
  noSelectZoneLabel: string = 'Select a Zone';
  @Input()
  selectedDistrictId: number | null = null;
  @Input()
  selectedZoneId: number | null = null;
  @Input()
  selected: string | null = null;
  @Input()
  cardIcon!: IconDefinition;

  @Output()
  zoneSelected: EventEmitter<number | null> = new EventEmitter<number | null>()
}
