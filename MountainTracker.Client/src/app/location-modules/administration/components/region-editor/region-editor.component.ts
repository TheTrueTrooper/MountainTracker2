import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AdminCountry } from '../../../../models';

@Component({
  selector: 'region-editor',
  templateUrl: './region-editor.component.html',
  styleUrl: './region-editor.component.scss'
})
export class RegionEditorComponent {
  @Input()
  selectSelectOptions: AdminCountry[] = [];
  @Input()
  selectLabel: string = 'Select an Option';
  @Input()
  selectNoSelectLabel: string = 'Select an Option';
  @Input()
  selectSelected: string | null = null;

  @Output()
  itemSelected: EventEmitter<number> = new EventEmitter<number>()

  onItemSelected(id:number)
  {
    this.itemSelected.emit(id);
  }
}
