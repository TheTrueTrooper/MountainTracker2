import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MountainEditorComponent } from './views';
import { EditTableComponent, GeoFenceEditTableComponent, RegionalSelectorComponent, CountryEditComponent, ProvinceOrStateEditComponent, RegionEditComponent } from './components';
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
import { ZoneEditComponent } from './components/zone-edit/zone-edit.component';

@NgModule({
  declarations: [
    RegionalSelectorComponent,
    EditTableComponent, 
    GeoFenceEditTableComponent,
    CountryEditComponent,
    MountainEditorComponent,
    ProvinceOrStateEditComponent, 
    RegionEditComponent, 
    DistrictEditComponent, ZoneEditComponent,
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
