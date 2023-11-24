import { Component } from '@angular/core';
import { TargetOSMSourceFactory } from '../../../../core-modules/open-street-map-module';
import { PannellumEquirectangularConfig } from '../../../../core-modules/pannellum-module';
import { ClientConfig } from '../../../../configuration/client-config';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  protected readonly mapSource = TargetOSMSourceFactory;

  protected readonly PannellumEquirectangularConfig: PannellumEquirectangularConfig = {
    autoRotate: true,
    autoRotateInactivityDelay: 2000,
    autoLoad: true,
  } as PannellumEquirectangularConfig;

  protected readonly clientConfig: ClientConfig

  constructor(protected readonly _clientConfig: ClientConfig)
  {
    this.clientConfig = _clientConfig
  }
}
