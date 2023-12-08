import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { actions, selectors } from '../../../../services/entity-state-services';
import * as featureActions from '../../actions';
import * as featureSelectors from '../../selectors';
import { Observable } from 'rxjs';
import { AdminCountry, AdminProvinceOrState, RegionGeoFenceNode } from '../../../../models';
import { faFlag, faEarth, faMap } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'mountain-editor',
  templateUrl: './mountain-editor.component.html',
  styleUrl: './mountain-editor.component.scss'
})
export class MountainEditorComponent {
  protected selectionCountry$: Observable<AdminCountry[]>;
  protected selectionProvinceOrState$: Observable<AdminCountry[]>;
  protected selectionRegion$: Observable<AdminCountry[]>;

  protected selectedCountryId$: Observable<number | null>;
  protected selectedProvinceOrStateId$: Observable<number | null>;
  protected selectedRegionId$: Observable<number | null>;

  protected countries$: Observable<AdminCountry[]>;
  protected provincesOrStates$: Observable<AdminProvinceOrState[]>;
  protected regions$: Observable<AdminProvinceOrState[]>;

  protected regionGeoFenceNodes$: Observable<RegionGeoFenceNode[]>;

  protected faFlag = faFlag;
  protected faEarth = faEarth;
  protected faMap = faMap;

  constructor(private store: Store)
  {
    this.selectedCountryId$ = this.store.select(featureSelectors.selectSelectedCountryId);
    this.selectedProvinceOrStateId$ = this.store.select(featureSelectors.selectSelectedProvinceOrStateId);
    this.selectedRegionId$ = this.store.select(featureSelectors.selectSelectedRegionId);


    this.countries$ = this.store.select(featureSelectors.selectCountries);
    this.provincesOrStates$ = this.store.select(featureSelectors.selectProvincesOrStates);
    this.regions$ = this.store.select(featureSelectors.selectRegions);

    this.selectionCountry$ = this.store.select(featureSelectors.selectCountrySelection);
    this.selectionProvinceOrState$ = this.store.select(featureSelectors.selectProvinceOrStateSelection);
    this.selectionRegion$ = this.store.select(featureSelectors.selectRegionSelection);

    this.regionGeoFenceNodes$ = this.store.select(featureSelectors.selectRegionGeoFenceNodes);

    this.store.dispatch(actions.loadCountries());
  }

  selectCountrySelected(id: number | null): void {
    this.store.dispatch(featureActions.selectCountry({id: id}));
  }

  provinceOrStateSelected(id: number | null)
  {
    this.store.dispatch(featureActions.selectProvinceOrState({id: id}));
  }

  regionSelected(id: number | null)
  {
    this.store.dispatch(featureActions.selectRegion({id: id}));
  }
}
