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
  public set selectRockClimbingRouteOptions(value: AdminRockClimbingRoute[] | null | undefined)
  {
    this._selectRockClimbingRouteOptions = value ?? [];
  }
  protected _selectRockClimbingRouteOptions: AdminRockClimbingRoute[] = [];
  @Input()
  public set selectedRockClimbingRouteOptions(value: AdminRockClimbingRoute[] | null | undefined)
  {
    this._selectedRockClimbingRouteOptions = value ?? [];
  }
  protected _selectedRockClimbingRouteOptions: AdminRockClimbingRoute[] = [];
  
  @Input()
  rockClimbingRouteDisplayedColumns: (
    "rowNo"|
    "id"|
    "routeCode"|
    "englishFullName"|
    "climbingWallId"|
    "info"|
    "thumbPictureBytes"|
    "rating"|
    "heightInMeters"|
    "heightInFeet"|
    "numberOfPitchs"|
    "firstAscent"|
    "firstFreeAscent"|
    "sunAm"|
    "sunPm"|
    "filteredSun"|
    "sunny"|
    "shady"|
    "driesFast"|
    "dryInRain"|
    "windy"|
    "climbAnglesHaveSlabs"|
    "climbAnglesHaveVerticals"|
    "climbAnglesHaveOverHangs"|
    "climbAnglesHaveRoofs"|
    "rockFalls"|
    "seepage"|
    "reachy"|
    "dyno"|
    "pumpy"|
    "techy"|
    "power"|
    "crimpy"|
    "slopey"|
    "pockSlashHole"|
    "seatStart"|
    "runout"|
    "stickClip"|
    "typeId"|
    "type"|
    "difficultyId"|
    "difficulty")[]
    = [
      "rowNo",
      "id",
      "routeCode",
      "englishFullName",
      "climbingWallId",
      "info",
      "thumbPictureBytes",
      "rating",
      "heightInMeters",
      "heightInFeet",
      "numberOfPitchs",
      "firstAscent",
      "firstFreeAscent",
      "sunAm",
      "sunPm",
      "filteredSun",
      "sunny",
      "shady",
      "driesFast",
      "dryInRain",
      "windy",
      "climbAnglesHaveSlabs",
      "climbAnglesHaveVerticals",
      "climbAnglesHaveOverHangs",
      "climbAnglesHaveRoofs",
      "rockFalls",
      "seepage",
      "reachy",
      "dyno",
      "pumpy",
      "techy",
      "power",
      "crimpy",
      "slopey",
      "pockSlashHole",
      "seatStart",
      "runout",
      "stickClip",
      "typeId",
      "type",
      "difficultyId",
      "difficulty",
    ];
  @Input()
  selectRockClimbingRouteLabel: string = 'Select a Rock Climbing Route';
  @Input()
  noSelectRockClimbingRouteLabel: string = 'Select a Rock Climbing Route';
  @Input()
  selectedRockClimbingRouteId: number | null = null;
  @Input()
  selectedRockClimbingWallId: number | null = null;
  @Input()
  selected: string | null = null;
  @Input()
  cardIcon!: IconDefinition;

  @Output()
  rockClimbingRouteSelected: EventEmitter<number | null> = new EventEmitter<number | null>()
}