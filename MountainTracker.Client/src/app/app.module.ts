import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { OpenStreetMapModule } from './core-modules/open-street-map-module';
import { PannellumPanoramaModule } from './core-modules/pannellum-module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './app.routes';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    RouterOutlet, 
    OpenStreetMapModule, 
    PannellumPanoramaModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  exports: [RouterModule],
  bootstrap:[AppComponent]
})
export class AppModule { }
