import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AdminCountry } from '../../../../models';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'country-edit',
  templateUrl: './country-edit.component.html',
  styleUrl: './country-edit.component.scss'
})
export class CountryEditComponent {
  @Input()
  public set selectCountryOptions(value: AdminCountry[] | null)
  {
    this._selectCountryOptions = value ?? [];
  }
  protected _selectCountryOptions: AdminCountry[] = [];
  @Input()
  public set selectedCountryOptions(value: AdminCountry[] | null)
  {
    this._selectedCountryOptions = value ?? [];
  }
  protected _selectedCountryOptions: AdminCountry[] = [];
  @Input()
  displayedColumns: ('rowNo' | 'id'| 'countryCode' | 'englishFullName')[]  = ['rowNo', 'id', 'countryCode', 'englishFullName'];
  @Input()
  selectCountryLabel: string = 'Select a Country';
  @Input()
  noSelectCountryLabel: string = 'Select a Country';
  @Input()
  selected: string | null = null;
  @Input()
  cardIcon!: IconDefinition;

  @Output()
  countrySelected: EventEmitter<number | null> = new EventEmitter<number | null>()
}
