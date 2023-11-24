import { Component } from '@angular/core';
import { TargetOSMSourceFactory } from '../../../../core-modules/open-street-map-module';
import { PannellumEquirectangularConfig } from '../../../../core-modules/pannellum-module';
import { ClientConfig, LandingConfig } from '../../../../configuration';
import { CountryService } from '../../../../services/graphql/country.service';
import { Observable } from 'rxjs';
import { Country } from '../../../../models';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  protected readonly mapSource = TargetOSMSourceFactory;

  protected readonly PannellumEquirectangularConfig: PannellumEquirectangularConfig;

  protected readonly config: LandingConfig;

  protected countries$: Observable<Country>;

  constructor(protected readonly clientConfig: ClientConfig, private countryService: CountryService)
  {
    this.config = this.clientConfig.LandingPage!;

    this.PannellumEquirectangularConfig = {
      autoRotate: this.config.AutoLoad,
      autoRotateInactivityDelay: this.config.AutoRotateDelay,
      autoLoad: this.config.AutoLoad,
    } as PannellumEquirectangularConfig;

    this.countries$ = countryService.getAllCountries();
  }
}
