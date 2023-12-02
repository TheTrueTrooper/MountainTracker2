import { Component } from '@angular/core';
import { TargetOSMSourceFactory } from '../../../../core-modules/open-street-map-module';
import { PannellumEquirectangularConfig } from '../../../../core-modules/pannellum-module';
import { ClientConfig, LandingConfig } from '../../../../configuration';
import { Observable } from 'rxjs';
import { Area, Country, District, ProvinceOrState, Region, RockClimbingRoute, RockClimbingWall, Zone } from '../../../../models';
import { Store } from '@ngrx/store';
import { selectAllCountries } from '../../../../services/entity-state-services/selectors';
import { actions } from '../../../../services/entity-state-services';
import { CountryService, ProvinceOrStateService, RegionService, DistrictService, ZoneService, AreaService, RockClimbingWallService, RockClimbingRouteService } from '../../../../services/graphql/local-service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  protected readonly mapSource = TargetOSMSourceFactory;

  protected readonly PannellumEquirectangularConfig: PannellumEquirectangularConfig;

  protected readonly config: LandingConfig;

  protected countries$: Observable<RockClimbingRoute>;

  constructor(protected readonly clientConfig: ClientConfig, private store: Store, private service: RockClimbingRouteService)
  {
    this.config = this.clientConfig.LandingPage!;

    this.PannellumEquirectangularConfig = {
      autoRotate: this.config.AutoLoad,
      autoRotateInactivityDelay: this.config.AutoRotateDelay,
      autoLoad: this.config.AutoLoad,
    } as PannellumEquirectangularConfig;

    //this.countries$ = service.getAllRockClimbingRoutes(); //this.store.select(selectAllCountries);
    //this.countries$ = service.getRockClimbingRouteById(1);
    this.countries$ = service.getRockClimbingRouteByCode("CA-BC-EK-CB-LMC-A1-W1-1"); //this.store.select(selectAllCountries);

    this.store.dispatch(actions.loadCountries());
  }
}
