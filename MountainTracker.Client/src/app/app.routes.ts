import { Routes } from '@angular/router';
import { LandingComponent } from './location-modules/landing-modules';

export const routes: Routes = [
    { path:'', component: LandingComponent, loadChildren:()=>import('./location-modules/landing-modules/landing-modules.module').then((modules)=>modules.LandingModulesModule)}
];
