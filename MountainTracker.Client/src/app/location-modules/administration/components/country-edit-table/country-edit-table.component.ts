import { Component, Input } from '@angular/core';
import { AdminCountry } from '../../../../models';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'country-edit-table',
  templateUrl: './country-edit-table.component.html',
  styleUrl: './country-edit-table.component.scss',
  host:{'class':'container-fluid'}
})
export class CountryEditTableComponent {
  @Input()
  displayedColumns: ('rowNo' | 'id'| 'countryCode' | 'englishFullName')[] = ['rowNo', 'id', 'countryCode', 'englishFullName'];
  
  @Input()
  public set countrySource(value: AdminCountry[])
  {
    this.dataSource.data = value ?? [];
  }
  dataSource: MatTableDataSource<AdminCountry> = new MatTableDataSource();

  applyFilter(filterValue: Event) {
    let filter = (filterValue.target! as HTMLInputElement)!.value!.trim().toLowerCase();
    this.dataSource.filter = filter;
  }
}
