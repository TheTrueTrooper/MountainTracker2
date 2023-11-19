import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenStreetMapModule } from '../../core-modules/open-street-map-module';
import { PannellumPanoramaModule } from '../../core-modules/pannellum-module';
import { LandingComponent } from './views';



@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    OpenStreetMapModule, 
    PannellumPanoramaModule,
  ]
})
export class LandingModulesModule { }
