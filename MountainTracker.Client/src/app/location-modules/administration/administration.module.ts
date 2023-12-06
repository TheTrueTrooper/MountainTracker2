import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MountainEditorComponent } from './views/mountain-editor/mountain-editor.component';
import { EditComponent } from './components/edit/edit.component';
import { StoreModule } from '@ngrx/store';
import { AdministrationFeature, administrationFeatureReducer } from './reducers/administration.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AdministrationEffects } from './effects';



@NgModule({
  declarations: [
    MountainEditorComponent,
    EditComponent,
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(AdministrationFeature, administrationFeatureReducer),
    EffectsModule.forFeature(AdministrationEffects),
  ]
})
export class AdministrationModule { }
