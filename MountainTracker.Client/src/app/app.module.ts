import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { OpenStreetMapModule } from './core-modules/open-street-map-module';
import { PannellumPanoramaModule } from './core-modules/pannellum-module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { CoreModule } from './core-modules/core-module/core-module.module';
import { ClientConfig, ConfigurationFactory } from './configuration';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    CoreModule,
    RouterOutlet, 
    OpenStreetMapModule, 
    PannellumPanoramaModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {provide: ClientConfig, useFactory:ConfigurationFactory.ClientConfigFactory}
  ],
  exports: [RouterModule],
  bootstrap:[AppComponent]
})
export class AppModule { }
