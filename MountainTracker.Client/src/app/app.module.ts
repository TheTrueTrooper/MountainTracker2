import { NgModule } from '@angular/core';
import { APOLLO_NAMED_OPTIONS, ApolloModule, NamedOptions } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
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
import { InMemoryCache } from '@apollo/client/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';



@NgModule({
  declarations: [AppComponent],
  imports: [
    ApolloModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    CoreModule,
    RouterOutlet, 
    OpenStreetMapModule, 
    PannellumPanoramaModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {provide: ClientConfig, useFactory:ConfigurationFactory.ClientConfigFactory},
    {
      provide: APOLLO_NAMED_OPTIONS,
      useFactory(httpLink: HttpLink, config: ClientConfig): NamedOptions {
        return {
          MountainTracker: {
            // <-- This settings will be saved by name: newClientName
            cache: new InMemoryCache(),
            link: httpLink.create({
              uri: config.GraphQlApiEndpoint!
            })
          },
        };
      },
      deps: [HttpLink, ClientConfig],
    },
  ],
  exports: [RouterModule],
  bootstrap:[AppComponent]
})
export class AppModule { }
