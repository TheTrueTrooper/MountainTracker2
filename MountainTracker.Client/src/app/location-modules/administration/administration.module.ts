import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MountainEditorComponent } from './views';
import { 
  EditTableComponent, 
  GeoFenceEditTableComponent, 
  CountryEditComponent, 
  ProvinceOrStateEditComponent, 
  RegionEditComponent,
  ZoneEditComponent,
  AreaEditComponent,
  RockClimbingWallEditComponent,
  FocusSelectorComponent
 } from './components';
import { StoreModule } from '@ngrx/store';
import { AdministrationFeature, administrationFeatureReducer } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { AdministrationEffects } from './effects';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { MatCardModule } from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DistrictEditComponent } from './components/district-edit/district-edit.component';
import { RockClimbingWallEditTableComponent } from './components/rock-climbing-wall-edit-table/rock-climbing-wall-edit-table.component';
import { RockClimbingWallSeasonalEditTableComponent } from './components/rock-climbing-wall-seasonal-edit-table/rock-climbing-wall-seasonal-edit-table.component';
import { RockClimbingRouteEditComponent } from './components/rock-climbing-route-edit/rock-climbing-route-edit.component';
import { RockClimbingRouteEditTableComponent } from './components/rock-climbing-route-edit-table/rock-climbing-route-edit-table.component';

@NgModule({
  declarations: [
    FocusSelectorComponent,
    EditTableComponent, 
    GeoFenceEditTableComponent,
    CountryEditComponent,
    MountainEditorComponent,
    ProvinceOrStateEditComponent, 
    RegionEditComponent, 
    DistrictEditComponent, 
    ZoneEditComponent, 
    AreaEditComponent, 
    RockClimbingWallEditComponent, 
    RockClimbingWallEditTableComponent, 
    RockClimbingWallSeasonalEditTableComponent, 
    RockClimbingRouteEditComponent, 
    RockClimbingRouteEditTableComponent,
  ],
  imports: [
    CommonModule,
    CdkTableModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatSelectModule,
    FontAwesomeModule,
    StoreModule.forFeature(AdministrationFeature, administrationFeatureReducer),
    EffectsModule.forFeature(AdministrationEffects),
  ],
})
export class AdministrationModule { }
