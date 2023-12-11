import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { AdminRockClimbingRoute } from '../../../../models';

@Component({
  selector: 'rock-climbing-route-edit',
  templateUrl: './rock-climbing-route-edit.component.html',
  styleUrl: './rock-climbing-route-edit.component.scss',
  host:{'class':'container-fluid'}
})
export class RockClimbingRouteEditComponent {
  @Input()
  public set selectRockClimbingWallOptions(value: AdminRockClimbingRoute[] | null | undefined)
  {
    this._selectRockClimbingWallOptions = value ?? [];
  }
  protected _selectRockClimbingWallOptions: AdminRockClimbingRoute[] = [];
  @Input()
  public set selectedRockClimbingWallOptions(value: AdminRockClimbingRoute[] | null | undefined)
  {
    this._selectedRockClimbingWallOptions = value ?? [];
  }
  protected _selectedRockClimbingWallOptions: AdminRockClimbingRoute[] = [];
  @Input()
  public set selectedRockClimbingWallGeoFenceNodeOptions(value: AdminRockClimbingRoute[] | null | undefined)
  {
    this._selectedRockClimbingWallGeoFenceNodeOptions = value ?? [];
  }
  protected _selectedRockClimbingWallGeoFenceNodeOptions: AdminRockClimbingRoute[] = [];
  
  @Input()
  rockClimbingWallDisplayedColumns: (
    "rowNo"|
    "areaId"|
    "id"|
    "englishFullName"|
    "wallCode"|
    "latitudeStartOrCenter"|
    "longitudeStartOrCenter"|
    "latitudeParking"|
    "longitudeParking"
  )[]
    = [
      "rowNo",
      "areaId",
      "id",
      "englishFullName",
      "wallCode",
      "latitudeStartOrCenter",
      "longitudeStartOrCenter",
      "latitudeParking",
      "longitudeParking",
    ];
  @Input()
  selectRockClimbingWallLabel: string = 'Select a Rock Climbing Wall';
  @Input()
  noSelectRockClimbingWallLabel: string = 'Select a Rock Climbing Wall';
  @Input()
  selectedAreaId: number | null = null;
  @Input()
  selectedRockClimbingWallId: number | null = null;
  @Input()
  selected: string | null = null;
  @Input()
  cardIcon!: IconDefinition;

  @Output()
  rockClimbingWallSelected: EventEmitter<number | null> = new EventEmitter<number | null>()
}