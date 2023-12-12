import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AdminRockClimbingRoute } from '../../../../models';

export type RockClimbingRouteDisplayColumns = (
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

@Component({
  selector: 'rock-climbing-route-edit-table',
  templateUrl: './rock-climbing-route-edit-table.component.html',
  styleUrl: './rock-climbing-route-edit-table.component.scss',
  host:{'class':'container-fluid'}
})
export class RockClimbingRouteEditTableComponent {
  @Input()
  displayedColumns: RockClimbingRouteDisplayColumns 
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
      "difficulty"
    ];
  
  @Input()
  public set source(value: AdminRockClimbingRoute[])
  {
    this.dataSource.data = value ?? [];
  }
  dataSource: MatTableDataSource<AdminRockClimbingRoute> = new MatTableDataSource<AdminRockClimbingRoute>();

  applyFilter(filterValue: Event) {
    let filter = (filterValue.target! as HTMLInputElement)!.value!.trim().toLowerCase();
    this.dataSource.filter = filter;
  }
}
