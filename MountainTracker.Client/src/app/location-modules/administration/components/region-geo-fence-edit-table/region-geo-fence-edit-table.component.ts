import { Component, Input } from '@angular/core';
import { RegionGeoFenceNode } from '../../../../models';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'region-geo-fence-edit-table',
  templateUrl: './region-geo-fence-edit-table.component.html',
  styleUrl: './region-geo-fence-edit-table.component.scss',
  host:{'class':'container-fluid'}
})
export class RegionGeoFenceEditTableComponent {
  @Input()
  displayedColumns: ('rowNo' | 'id'| 'regionId' | 'latitude' |'longitude')[]  
    = ['rowNo', 'id', 'regionId', 'latitude', 'longitude'];

  @Input()
  public set regionGeoFenceNodeSource(value: RegionGeoFenceNode[])
  {
    this.dataSource.data = value ?? [];
  }
  dataSource: MatTableDataSource<RegionGeoFenceNode> = new MatTableDataSource<RegionGeoFenceNode>();

  applyFilter(filterValue: Event) {
    let filter = (filterValue.target! as HTMLInputElement)!.value!.trim().toLowerCase();
    this.dataSource.filter = filter;
  }
}
