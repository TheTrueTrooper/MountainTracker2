import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts'
import { OpenStreetMapModule } from '../../core-modules/open-street-map-module';
import { PannellumPanoramaModule } from '../../core-modules/pannellum-module';
import { LandingComponent, PageNotFoundComponent } from './views';



@NgModule({
  declarations: [
    LandingComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    OpenStreetMapModule,
    PannellumPanoramaModule
  ]
})
export class LandingModulesModule { }
