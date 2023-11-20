import { Routes } from '@angular/router';
import { LandingComponent, PageNotFoundComponent } from './location-modules/landing-modules';

export const routes: Routes = [
    { path:'', component: LandingComponent, loadChildren:()=>import('./location-modules/landing-modules/landing-modules.module').then((modules)=>modules.LandingModulesModule)},
    { path:'**', redirectTo: '404-resource-not-found'},
    { path:'404-resource-not-found', component: PageNotFoundComponent, loadChildren:()=>import('./location-modules/landing-modules/landing-modules.module').then((modules)=>modules.LandingModulesModule)}
];
