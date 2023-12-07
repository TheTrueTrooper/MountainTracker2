import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MountainEditorComponent } from './views/mountain-editor/mountain-editor.component';
import { EditTableComponent, RegionalSelectorComponent, RegionEditorComponent, CountryEditComponent } from './components';
import { StoreModule } from '@ngrx/store';
import { AdministrationFeature, administrationFeatureReducer } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { AdministrationEffects } from './effects';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    MountainEditorComponent,
    RegionalSelectorComponent,
    EditTableComponent,
    RegionEditorComponent,
    CountryEditComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    StoreModule.forFeature(AdministrationFeature, administrationFeatureReducer),
    EffectsModule.forFeature(AdministrationEffects),
  ],
})
export class AdministrationModule { }
