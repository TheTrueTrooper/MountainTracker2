import { Routes } from '@angular/router';
import { LandingComponent } from './location-modules/landing-modules';
import { PageNotFoundComponent } from './core-modules/core-module';
import { MountainEditorComponent } from './location-modules/administration';

export const routes: Routes = [
    { path:'', component: LandingComponent, loadChildren:()=>import('./location-modules/landing-modules/landing-modules.module').then((modules)=>modules.LandingModulesModule)},
    { path:'administration', component: MountainEditorComponent, loadChildren:()=>import('./location-modules/administration/administration.module').then((modules)=>modules.AdministrationModule)},
    { path:'404-resource-not-found', component: PageNotFoundComponent},
    { path:'**', redirectTo: '404-resource-not-found'},
];
