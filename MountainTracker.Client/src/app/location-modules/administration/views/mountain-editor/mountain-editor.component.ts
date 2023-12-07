import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { actions, selectors } from '../../../../services/entity-state-services';
import * as featureActions from '../../actions';
import * as featureSelectors from '../../selectors';
import { Observable } from 'rxjs';
import { AdminCountry, AdminProvinceOrState } from '../../../../models';
import { faFlag, faEarth } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'mountain-editor',
  templateUrl: './mountain-editor.component.html',
  styleUrl: './mountain-editor.component.scss'
})
export class MountainEditorComponent {
  protected selection$: Observable<AdminCountry[]>;
  protected selectedCountryId$: Observable<number | null>;
  protected countries$: Observable<AdminCountry[]>;
  protected ProvincesOrStates$: Observable<AdminProvinceOrState[]>;

  protected faFlag = faFlag;
  protected faEarth = faEarth;

  constructor(private store: Store)
  {
    this.selectedCountryId$ = this.store.select(featureSelectors.selectSelectedCountryId)
    this.countries$ = this.store.select(featureSelectors.selectCountries)
    this.ProvincesOrStates$ = this.store.select(featureSelectors.selectProvincesOrStates)
    this.selection$ = this.store.select(featureSelectors.selectSelection)

    this.store.dispatch(actions.loadCountries());
  }

  selectCountrySelected(id: number | null): void {
    this.store.dispatch(featureActions.selectCountry({id: id}));
  }

  provinceOrStateSelected(id: number | null)
  {
    this.store.dispatch(featureActions.selectCountry({id: id}));
  }
}
