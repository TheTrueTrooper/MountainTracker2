import { Component, Input } from '@angular/core';
import { AdminProvinceOrState } from '../../../../models/view-models/administration/admin-province-or-state';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'province-or-state-edit-table',
  templateUrl: './province-or-state-edit-table.component.html',
  styleUrl: './province-or-state-edit-table.component.scss',
  host:{'class':'container-fluid'}
})
export class ProvinceOrStateEditTableComponent {
  @Input()
  displayedColumns: ('rowNo' | 'id'| 'regionCode' | 'englishFullName' | 'countryId')[] = ['rowNo', 'id', 'regionCode', 'englishFullName', 'countryId'];
  
  @Input()
  public set provinceOrStateSource(value: AdminProvinceOrState[])
  {
    this.dataSource.data = value ?? [];
  }
  dataSource: MatTableDataSource<AdminProvinceOrState> = new MatTableDataSource<AdminProvinceOrState>();

  applyFilter(filterValue: Event) {
    let filter = (filterValue.target! as HTMLInputElement)!.value!.trim().toLowerCase();
    this.dataSource.filter = filter;
  }
}
