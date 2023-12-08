import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AdminRegion } from '../../../../models';

@Component({
  selector: 'region-edit-table',
  templateUrl: './region-edit-table.component.html',
  styleUrl: './region-edit-table.component.scss',
  host:{'class':'container-fluid'}
})
export class RegionEditTableComponent {
  @Input()
  displayedColumns: ('rowNo' | 'id'| 'regionCode' | 'englishFullName' |'provinceOrStateId' | 'latitudeStartOrCenter' | 'longitudeStartOrCenter' | 'thumbPictureBytes' | 'info')[]  
    = ['rowNo', 'id', 'regionCode', 'englishFullName', 'provinceOrStateId', 'latitudeStartOrCenter', 'longitudeStartOrCenter', 'thumbPictureBytes', 'info'];
  
  @Input()
  public set regionSource(value: AdminRegion[])
  {
    this.dataSource.data = value ?? [];
  }
  dataSource: MatTableDataSource<AdminRegion> = new MatTableDataSource<AdminRegion>();

  applyFilter(filterValue: Event) {
    let filter = (filterValue.target! as HTMLInputElement)!.value!.trim().toLowerCase();
    this.dataSource.filter = filter;
  }
}
