import { Component } from '@angular/core';
import { TargetOSMSourceFactory } from '../../../../core-modules/open-street-map-module';
import { PannellumEquirectangularConfig } from '../../../../core-modules/pannellum-module';
import { ClientConfig, LandingConfig } from '../../../../configuration';
import { CountryService } from '../../../../services/graphql/country.service';
import { Observable } from 'rxjs';
import { Country } from '../../../../models';
import * as graphqlHelpers from '../../../../graphql-helpers/graphql-helper';
import { QlSelectionSet, QlSelectionSetTyped } from '../../../../graphql-helpers';
import { ProvinceOrState } from '../../../../models/service-models/province-or-state';
import { Region } from '../../../../models/service-models/region';
import { District } from '../../../../models/service-models/district';

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

    let selection: QlSelectionSetTyped<undefined, Country> = {
      fields: ['id', 'countryCode', 'englishFullName'],
      subSet: [
        {
          name: 'provincesOrStates',
          fields: ['id', 'regionCode', 'englishFullName'],
          subSet:[
            {
              name: "regions",
              fields: ['id', 'regionCode', 'englishFullName'],
              subSet:[
                {
                  name: "districts",
                  fields: ['id', 'districtCode', 'englishFullName', 'regionId']
                } as QlSelectionSetTyped<Region, District>
              ]
            } as QlSelectionSetTyped<ProvinceOrState, Region>
          ]
        } as QlSelectionSetTyped<Country, ProvinceOrState>
      ]
    }

    console.log(graphqlHelpers.selectToQlFields(selection));

    this.countries$ = countryService.getAllCountries(selection);
  }
}
