import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { actions, selectors } from '../../../../services/entity-state-services';
import * as featureActions from '../../actions';
import * as featureSelectors from '../../selectors';
import { Observable } from 'rxjs';
import { AdminCountry, Country, ProvinceOrState } from '../../../../models';

@Component({
  selector: 'app-mountain-editor',
  templateUrl: './mountain-editor.component.html',
  styleUrl: './mountain-editor.component.scss'
})
export class MountainEditorComponent {
  protected selection$: Observable<AdminCountry | null | undefined>;
  protected countries$: Observable<AdminCountry[]>;
  protected ProvincesOrStates$: Observable<ProvinceOrState[]>;

  constructor(private store: Store)
  {
    this.countries$ = this.store.select(featureSelectors.selectCountries)
    this.ProvincesOrStates$ = this.store.select(selectors.selectAllProvincesOrStates)
    this.selection$ = this.store.select(featureSelectors.selectSelection)

    this.store.dispatch(actions.loadCountries());
  }

  select(id: number): void {
    console.log("Select 39");
    
    this.store.dispatch(featureActions.selectCountrySuccess({id: id}));
  }
}
