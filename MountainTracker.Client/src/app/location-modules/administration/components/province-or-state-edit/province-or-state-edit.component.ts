import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AdminProvinceOrState } from '../../../../models/view-models/administration/admin-province-or-state';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'province-or-state-edit',
  templateUrl: './province-or-state-edit.component.html',
  styleUrl: './province-or-state-edit.component.scss',
  host:{'class':'container-fluid'}
})
export class ProvinceOrStateEditComponent {
  @Input()
  public set selectProvinceOrStateOptions(value: AdminProvinceOrState[] | null | undefined)
  {
    this._selectProvinceOrStateOptions = value ?? [];
  }
  protected _selectProvinceOrStateOptions: AdminProvinceOrState[] = [];
  @Input()
  public set selectedProvinceOrStateOptions(value: AdminProvinceOrState[] | null | undefined)
  {
    this._selectedProvinceOrStateOptions = value ?? [];
  }
  protected _selectedProvinceOrStateOptions: AdminProvinceOrState[] = [];
  @Input()
  displayedColumns: ('rowNo' | 'id'| 'regionCode' | 'englishFullName' | 'parentId')[] = ['rowNo', 'id', 'regionCode', 'englishFullName', 'parentId'];
  @Input()
  selectProvinceOrStateLabel: string = 'Select a Province or State';
  @Input()
  noSelectProvinceOrStateLabel: string = 'Select a Province or State';
  @Input()
  selectedCountryId: number | null = null;
  @Input()
  selected: string | null = null;
  @Input()
  cardIcon!: IconDefinition;

  @Output()
  provinceOrStateSelected: EventEmitter<number | null> = new EventEmitter<number | null>()
}