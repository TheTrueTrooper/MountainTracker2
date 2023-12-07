import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AdminCountry } from '../../../../models';

@Component({
  selector: 'regional-selector',
  templateUrl: './regional-selector.component.html',
  styleUrl: './regional-selector.component.scss'
})
export class RegionalSelectorComponent {
  @Input()
  selectOptions: AdminCountry[] = [];
  @Input()
  label: string = 'Select an Option';
  @Input()
  noSelectLabel: string = 'Select an Option';
  @Input()
  selected: string | null = null;

  @Output()
  itemSelected: EventEmitter<number> = new EventEmitter<number>()

  onItemSelected(id:number)
  {
    this.itemSelected.emit(id);
  }
}
