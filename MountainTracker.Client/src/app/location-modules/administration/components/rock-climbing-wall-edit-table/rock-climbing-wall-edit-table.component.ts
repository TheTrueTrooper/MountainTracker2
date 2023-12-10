import { Component, Input } from '@angular/core';
import { AdminRockClimbingWall } from '../../../../models';
import { MatTableDataSource } from '@angular/material/table';

export type DisplayColumns = (
  "rowNo"|
  "areaId"|
  "id"|
  "englishFullName"|
  "wallCode"|
  "info"|
  "latitudeStartOrCenter"|
  "longitudeStartOrCenter"|
  "latitudeParking"|
  "longitudeParking"|
  "thumbPictureBytes"|
  "janSeasonalClimbingQualityRatingId"|
  "febSeasonalClimbingQualityRatingId"|
  "marSeasonalClimbingQualityRatingId"|
  "aprSeasonalClimbingQualityRatingId"|
  "maySeasonalClimbingQualityRatingId"|
  "junSeasonalClimbingQualityRatingId"|
  "julSeasonalClimbingQualityRatingId"|
  "augSeasonalClimbingQualityRatingId"|
  "sepSeasonalClimbingQualityRatingId"|
  "octSeasonalClimbingQualityRatingId"|
  "novSeasonalClimbingQualityRatingId"|
  "decSeasonalClimbingQualityRatingId"|
  "janSeasonalBusyRatingId"|
  "febSeasonalBusyRatingId"|
  "marSeasonalBusyRatingId"|
  "aprSeasonalBusyRatingId"|
  "maySeasonalBusyRatingId"|
  "junSeasonalBusyRatingId"|
  "julSeasonalBusyRatingId"|
  "augSeasonalBusyRatingId"|
  "sepSeasonalBusyRatingId"|
  "octSeasonalBusyRatingId"|
  "novSeasonalBusyRatingId"|
  "decSeasonalBusyRatingId"|
  "janSeasonalClimbingQualityRating"|
  "febSeasonalClimbingQualityRating"|
  "marSeasonalClimbingQualityRating"|
  "aprSeasonalClimbingQualityRating"|
  "maySeasonalClimbingQualityRating"|
  "junSeasonalClimbingQualityRating"|
  "julSeasonalClimbingQualityRating"|
  "augSeasonalClimbingQualityRating"|
  "sepSeasonalClimbingQualityRating"|
  "octSeasonalClimbingQualityRating"|
  "novSeasonalClimbingQualityRating"|
  "decSeasonalClimbingQualityRating"|
  "janSeasonalBusyRating"|
  "febSeasonalBusyRating"|
  "marSeasonalBusyRating"|
  "aprSeasonalBusyRating"|
  "maySeasonalBusyRating"|
  "junSeasonalBusyRating"|
  "julSeasonalBusyRating"|
  "augSeasonalBusyRating"|
  "sepSeasonalBusyRating"|
  "octSeasonalBusyRating"|
  "novSeasonalBusyRating"|
  "decSeasonalBusyRating")[]

@Component({
  selector: 'rock-climbing-wall-edit-table',
  templateUrl: './rock-climbing-wall-edit-table.component.html',
  styleUrl: './rock-climbing-wall-edit-table.component.scss',
  host:{'class':'container-fluid'}
})
export class RockClimbingWallEditTableComponent {
  @Input()
  displayedColumns: DisplayColumns 
    = [
      "rowNo",
      "areaId",
      "id",
      "englishFullName",
      "wallCode",
      "info",
      "latitudeStartOrCenter",
      "longitudeStartOrCenter",
      "latitudeParking",
      "longitudeParking",
      "thumbPictureBytes",
      "janSeasonalClimbingQualityRatingId",
      "febSeasonalClimbingQualityRatingId",
      "marSeasonalClimbingQualityRatingId",
      "aprSeasonalClimbingQualityRatingId",
      "maySeasonalClimbingQualityRatingId",
      "junSeasonalClimbingQualityRatingId",
      "julSeasonalClimbingQualityRatingId",
      "augSeasonalClimbingQualityRatingId",
      "sepSeasonalClimbingQualityRatingId",
      "octSeasonalClimbingQualityRatingId",
      "novSeasonalClimbingQualityRatingId",
      "decSeasonalClimbingQualityRatingId",
      "janSeasonalBusyRatingId",
      "febSeasonalBusyRatingId",
      "marSeasonalBusyRatingId",
      "aprSeasonalBusyRatingId",
      "maySeasonalBusyRatingId",
      "junSeasonalBusyRatingId",
      "julSeasonalBusyRatingId",
      "augSeasonalBusyRatingId",
      "sepSeasonalBusyRatingId",
      "octSeasonalBusyRatingId",
      "novSeasonalBusyRatingId",
      "decSeasonalBusyRatingId",
      "janSeasonalClimbingQualityRating",
      "febSeasonalClimbingQualityRating",
      "marSeasonalClimbingQualityRating",
      "aprSeasonalClimbingQualityRating",
      "maySeasonalClimbingQualityRating",
      "junSeasonalClimbingQualityRating",
      "julSeasonalClimbingQualityRating",
      "augSeasonalClimbingQualityRating",
      "sepSeasonalClimbingQualityRating",
      "octSeasonalClimbingQualityRating",
      "novSeasonalClimbingQualityRating",
      "decSeasonalClimbingQualityRating",
      "janSeasonalBusyRating",
      "febSeasonalBusyRating",
      "marSeasonalBusyRating",
      "aprSeasonalBusyRating",
      "maySeasonalBusyRating",
      "junSeasonalBusyRating",
      "julSeasonalBusyRating",
      "augSeasonalBusyRating",
      "sepSeasonalBusyRating",
      "octSeasonalBusyRating",
      "novSeasonalBusyRating",
      "decSeasonalBusyRating",
    ];
  
  @Input()
  public set source(value: AdminRockClimbingWall[])
  {
    this.dataSource.data = value ?? [];
  }
  dataSource: MatTableDataSource<AdminRockClimbingWall> = new MatTableDataSource<AdminRockClimbingWall>();

  applyFilter(filterValue: Event) {
    let filter = (filterValue.target! as HTMLInputElement)!.value!.trim().toLowerCase();
    this.dataSource.filter = filter;
  }
}