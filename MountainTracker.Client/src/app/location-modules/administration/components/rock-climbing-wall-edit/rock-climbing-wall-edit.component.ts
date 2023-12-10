import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { AdminRockClimbingWall, RockClimbingWallGeoFenceNode } from '../../../../models';
import { DisplayColumns as GeoDisplayColumns } from '../geo-fence-edit-table/geo-fence-edit-table.component';
import { DisplayColumns as SeasonalDisplayColumns } from '../rock-climbing-wall-seasonal-edit-table/rock-climbing-wall-seasonal-edit-table.component';

@Component({
  selector: 'rock-climbing-wall-edit',
  templateUrl: './rock-climbing-wall-edit.component.html',
  styleUrl: './rock-climbing-wall-edit.component.scss',
  host:{'class':'container-fluid'}
})
export class RockClimbingWallEditComponent {
  @Input()
  public set selectRockClimbingWallOptions(value: AdminRockClimbingWall[] | null | undefined)
  {
    this._selectRockClimbingWallOptions = value ?? [];
  }
  protected _selectRockClimbingWallOptions: AdminRockClimbingWall[] = [];
  @Input()
  public set selectedRockClimbingWallOptions(value: AdminRockClimbingWall[] | null | undefined)
  {
    this._selectedRockClimbingWallOptions = value ?? [];
  }
  protected _selectedRockClimbingWallOptions: AdminRockClimbingWall[] = [];
  @Input()
  public set selectedRockClimbingWallGeoFenceNodeOptions(value: RockClimbingWallGeoFenceNode[] | null | undefined)
  {
    this._selectedRockClimbingWallGeoFenceNodeOptions = value ?? [];
  }
  protected _selectedRockClimbingWallGeoFenceNodeOptions: RockClimbingWallGeoFenceNode[] = [];
  
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
  geoFenceDisplayedColumns: GeoDisplayColumns  
    = ['rowNo', 'id', 'parentId', 'latitude', 'longitude'];
  @Input()
  seasonalDisplayedColumns: SeasonalDisplayColumns  
    = ['months', 'seasonalBusyRatingIds', 'seasonalBusyRatings', 'seasonalClimbingQualityRatingIds', 'seasonalClimbingQualityRatings'];
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