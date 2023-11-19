import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts'
import { OpenStreetMapModule } from '../../core-modules/open-street-map-module';
import { PannellumPanoramaModule } from '../../core-modules/pannellum-module';
import { LandingComponent } from './views';



@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    OpenStreetMapModule, 
    PannellumPanoramaModule,
    NgChartsModule
  ]
})
export class LandingModulesModule { }
