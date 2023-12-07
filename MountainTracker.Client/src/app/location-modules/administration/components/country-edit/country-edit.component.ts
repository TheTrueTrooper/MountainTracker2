import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AdminCountry } from '../../../../models';

@Component({
  selector: 'country-edit',
  templateUrl: './country-edit.component.html',
  styleUrl: './country-edit.component.scss'
})
export class CountryEditComponent {
  @Input()
  selectCountryOptions: AdminCountry[] = [];
  @Input()
  label: string = 'Select a Country';
  @Input()
  noSelectLabel: string = 'Select an Option';
  @Input()
  selected: string | null = null;

  @Output()
  countrySelected: EventEmitter<number> = new EventEmitter<number>()

  onCountrySelected(id:number)
  {
    this.countrySelected.emit(id);
  }
}
