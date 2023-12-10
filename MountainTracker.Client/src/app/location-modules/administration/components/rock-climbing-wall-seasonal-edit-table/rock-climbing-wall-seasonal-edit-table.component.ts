import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AdminRockClimbingWall, AdminRockClimbingWallSeasonalRating } from '../../../../models';

export type DisplayColumns = (
  "months"|
  "seasonalClimbingQualityRatingIds"|
  "seasonalClimbingQualityRatings"|
  "seasonalBusyRatingIds"|
  "seasonalBusyRatings"
  )[]

@Component({
  selector: 'rock-climbing-wall-seasonal-edit-table',
  templateUrl: './rock-climbing-wall-seasonal-edit-table.component.html',
  styleUrl: './rock-climbing-wall-seasonal-edit-table.component.scss',
  host:{'class':'container-fluid'}
})
export class RockClimbingWallSeasonalEditTableComponent  {
  @Input()
  displayedColumns: DisplayColumns 
    = [
      'months',
      'seasonalBusyRatingIds',
      'seasonalBusyRatings',
      'seasonalClimbingQualityRatingIds',
      'seasonalClimbingQualityRatings'
    ];
  @Input()
  public set seasonalRatingsSource(value: AdminRockClimbingWall)
  {
    const data: AdminRockClimbingWallSeasonalRating[] = value? [
      { month: 'January', seasonalBusyRatingId: value.janSeasonalBusyRatingId, seasonalBusyRating: value.janSeasonalBusyRating?.englishName, seasonalClimbingQualityRatingId: value.janSeasonalClimbingQualityRatingId, seasonalClimbingQualityRating: value.janSeasonalClimbingQualityRating?.englishName },
      { month: 'February', seasonalBusyRatingId: value.febSeasonalBusyRatingId, seasonalBusyRating: value.febSeasonalBusyRating?.englishName, seasonalClimbingQualityRatingId: value.febSeasonalClimbingQualityRatingId, seasonalClimbingQualityRating: value.febSeasonalClimbingQualityRating?.englishName },
      { month: 'March', seasonalBusyRatingId: value.marSeasonalBusyRatingId, seasonalBusyRating: value.marSeasonalBusyRating?.englishName, seasonalClimbingQualityRatingId: value.marSeasonalClimbingQualityRatingId, seasonalClimbingQualityRating: value.marSeasonalClimbingQualityRating?.englishName },
      { month: 'April', seasonalBusyRatingId: value.aprSeasonalBusyRatingId, seasonalBusyRating: value.aprSeasonalBusyRating?.englishName, seasonalClimbingQualityRatingId: value.aprSeasonalClimbingQualityRatingId, seasonalClimbingQualityRating: value.aprSeasonalClimbingQualityRating?.englishName },
      { month: 'May', seasonalBusyRatingId: value.maySeasonalBusyRatingId, seasonalBusyRating: value.maySeasonalBusyRating?.englishName, seasonalClimbingQualityRatingId: value.maySeasonalClimbingQualityRatingId, seasonalClimbingQualityRating: value.maySeasonalClimbingQualityRating?.englishName },
      { month: 'June', seasonalBusyRatingId: value.junSeasonalBusyRatingId, seasonalBusyRating: value.junSeasonalBusyRating?.englishName, seasonalClimbingQualityRatingId: value.junSeasonalClimbingQualityRatingId, seasonalClimbingQualityRating: value.junSeasonalClimbingQualityRating?.englishName },
      { month: 'July', seasonalBusyRatingId: value.julSeasonalBusyRatingId, seasonalBusyRating: value.julSeasonalBusyRating?.englishName, seasonalClimbingQualityRatingId: value.julSeasonalClimbingQualityRatingId, seasonalClimbingQualityRating: value.julSeasonalClimbingQualityRating?.englishName },
      { month: 'August', seasonalBusyRatingId: value.augSeasonalBusyRatingId, seasonalBusyRating: value.augSeasonalBusyRating?.englishName, seasonalClimbingQualityRatingId: value.augSeasonalClimbingQualityRatingId, seasonalClimbingQualityRating: value.augSeasonalClimbingQualityRating?.englishName },
      { month: 'September', seasonalBusyRatingId: value.sepSeasonalBusyRatingId, seasonalBusyRating: value.sepSeasonalBusyRating?.englishName, seasonalClimbingQualityRatingId: value.sepSeasonalClimbingQualityRatingId, seasonalClimbingQualityRating: value.sepSeasonalClimbingQualityRating?.englishName },
      { month: 'October', seasonalBusyRatingId: value.octSeasonalBusyRatingId, seasonalBusyRating: value.octSeasonalBusyRating?.englishName, seasonalClimbingQualityRatingId: value.octSeasonalClimbingQualityRatingId, seasonalClimbingQualityRating: value.octSeasonalClimbingQualityRating?.englishName },
      { month: 'November', seasonalBusyRatingId: value.novSeasonalBusyRatingId, seasonalBusyRating: value.novSeasonalBusyRating?.englishName, seasonalClimbingQualityRatingId: value.novSeasonalClimbingQualityRatingId, seasonalClimbingQualityRating: value.novSeasonalClimbingQualityRating?.englishName },
      { month: 'December', seasonalBusyRatingId: value.decSeasonalBusyRatingId, seasonalBusyRating: value.decSeasonalBusyRating?.englishName, seasonalClimbingQualityRatingId: value.decSeasonalClimbingQualityRatingId, seasonalClimbingQualityRating: value.decSeasonalClimbingQualityRating?.englishName },
    ] : []
    this.dataSource.data = data;
  }
  dataSource: MatTableDataSource<AdminRockClimbingWallSeasonalRating> = new MatTableDataSource<AdminRockClimbingWallSeasonalRating>();

  applyFilter(filterValue: Event) {
    let filter = (filterValue.target! as HTMLInputElement)!.value!.trim().toLowerCase();
    this.dataSource.filter = filter;
  }
}