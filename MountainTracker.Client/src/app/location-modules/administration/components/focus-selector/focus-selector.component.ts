import { Component, EventEmitter, Input, Output } from '@angular/core';
import { labeled } from '../../../../models';

@Component({
  selector: 'focus-selector',
  templateUrl: './focus-selector.component.html',
  styleUrl: './focus-selector.component.scss'
  
})
export class RegionalSelectorComponent {
  @Input()
  selectOptions: labeled[] | null = [];
  @Input()
  selectLabel: string = 'Select an Option';
  @Input()
  noSelectLabel: string = 'Select an Option';
  @Input()
  selected: string | null = null;

  @Output()
  itemSelected: EventEmitter<number | null> = new EventEmitter<number | null>()

  onitemSelected($event: number)
  {
    if($event as unknown === "null")
    {
      this.itemSelected.emit(null);
      return;
    }
    this.itemSelected.emit($event);
  }
}
