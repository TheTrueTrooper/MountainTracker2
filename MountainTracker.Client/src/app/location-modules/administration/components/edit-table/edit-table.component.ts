import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AdminCountry, AdminProvinceOrState, AdminRegion, AdminZone } from '../../../../models';

@Component({
  selector: 'edit-table',
  templateUrl: './edit-table.component.html',
  styleUrl: './edit-table.component.scss',
  host:{'class':'container-fluid'}
})
export class EditTableComponent {
  @Input()
  displayedColumns: ('rowNo' | 'id'| 'regionCode' | 'englishFullName' | 'parentId' | 'latitudeStartOrCenter' | 'longitudeStartOrCenter' | 'thumbPictureBytes' | 'info')[]  
    = ['rowNo', 'id', 'regionCode', 'englishFullName', 'parentId', 'latitudeStartOrCenter', 'longitudeStartOrCenter', 'thumbPictureBytes', 'info'];
  
  @Input()
  public set source(value: AdminCountry[] | AdminProvinceOrState[] | AdminRegion[] | AdminZone[])
  {
    this.dataSource.data = value ?? [];
  }
  dataSource: MatTableDataSource<AdminCountry | AdminProvinceOrState | AdminRegion | AdminZone> = new MatTableDataSource<AdminCountry | AdminProvinceOrState | AdminRegion | AdminZone>();

  @Input()
  codeTitle: string = "code";
  @Input()
  parentTitle: string = "Parent";

  applyFilter(filterValue: Event) {
    let filter = (filterValue.target! as HTMLInputElement)!.value!.trim().toLowerCase();
    this.dataSource.filter = filter;
  }
}
