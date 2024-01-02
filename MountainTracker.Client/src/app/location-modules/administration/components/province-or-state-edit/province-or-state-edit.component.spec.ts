import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvinceOrStateEditComponent } from './province-or-state-edit.component';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MockComponent } from 'ng-mocks';
import { FocusSelectorComponent } from '../focus-selector/focus-selector.component';
import { EditTableComponent } from '../edit-table/edit-table.component';

describe('ProvinceOrStateEditComponent', () => {
  let component: ProvinceOrStateEditComponent;
  let fixture: ComponentFixture<ProvinceOrStateEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProvinceOrStateEditComponent,
        MockComponent(FocusSelectorComponent),
        MockComponent(EditTableComponent)
    ],
    imports: [
      MatCardModule,
      MatSelectModule,
      FontAwesomeModule,
    ]})
    .compileComponents();
    
    fixture = TestBed.createComponent(ProvinceOrStateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
