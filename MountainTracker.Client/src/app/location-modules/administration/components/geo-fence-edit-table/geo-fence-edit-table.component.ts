import { Component, Input } from '@angular/core';
import { AreaGeoFenceNode, DistrictGeoFenceNode, RegionGeoFenceNode, RockClimbingWallGeoFenceNode, ZoneGeoFenceNode } from '../../../../models';
import { MatTableDataSource } from '@angular/material/table';

export type GeoDisplayColumns = ('rowNo' | 'id'| 'parentId' | 'latitude' |'longitude')[]

@Component({
  selector: 'geo-fence-edit-table',
  templateUrl: './geo-fence-edit-table.component.html',
  styleUrl: './geo-fence-edit-table.component.scss',
  host:{'class':'container-fluid'}
})
export class GeoFenceEditTableComponent {
  @Input()
  displayedColumns: GeoDisplayColumns = ['rowNo', 'id', 'parentId', 'latitude', 'longitude'];

  @Input()
  parentIdTitle: string = "Parent Id";

  @Input()
  public set geoFenceNodeSource(value: RegionGeoFenceNode[] | DistrictGeoFenceNode[] | ZoneGeoFenceNode[] | AreaGeoFenceNode[] | RockClimbingWallGeoFenceNode[])
  {
    this.dataSource.data = value ?? [];
  }
  dataSource: MatTableDataSource<RegionGeoFenceNode | DistrictGeoFenceNode | ZoneGeoFenceNode | AreaGeoFenceNode | RockClimbingWallGeoFenceNode> = new MatTableDataSource<RegionGeoFenceNode | DistrictGeoFenceNode | ZoneGeoFenceNode | AreaGeoFenceNode | RockClimbingWallGeoFenceNode>();

  applyFilter(filterValue: Event) {
    let filter = (filterValue.target! as HTMLInputElement)!.value!.trim().toLowerCase();
    this.dataSource.filter = filter;
  }
}
