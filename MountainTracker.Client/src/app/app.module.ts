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
import { ClientConfig } from './configuration/client-config';
import { Window } from './configuration/_global-config-def';



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
  providers: [{
    provide: ClientConfig, useFactory:()=>{ return {...globalThis.window.clientConfig} as ClientConfig }}
  ],
  exports: [RouterModule],
  bootstrap:[AppComponent]
})
export class AppModule { }
