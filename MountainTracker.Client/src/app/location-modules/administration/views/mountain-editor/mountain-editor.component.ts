import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { actions, selectors } from '../../../../services/entity-state-services';
import { Observable } from 'rxjs';
import { Country } from '../../../../models';

@Component({
  selector: 'app-mountain-editor',
  templateUrl: './mountain-editor.component.html',
  styleUrl: './mountain-editor.component.scss'
})
export class MountainEditorComponent {
  protected countries$: Observable<Country[]>;

  constructor(private store: Store)
  {
    this.countries$ = this.store.select(selectors.selectAllCountries)

    this.store.dispatch(actions.loadCountries());
  }
}
