import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictEditComponent } from './district-edit.component';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MockComponent } from 'ng-mocks';
import { FocusSelectorComponent } from '../focus-selector/focus-selector.component';
import { EditTableComponent } from '../edit-table/edit-table.component';
import { GeoFenceEditTableComponent } from '../geo-fence-edit-table/geo-fence-edit-table.component';

describe('DistrictEditComponent', () => {
  let component: DistrictEditComponent;
  let fixture: ComponentFixture<DistrictEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        DistrictEditComponent,
        MockComponent(FocusSelectorComponent),
        MockComponent(EditTableComponent),
        MockComponent(GeoFenceEditTableComponent)
    ],
    imports: [
      MatCardModule,
      MatSelectModule,
      FontAwesomeModule,
    ]})
    .compileComponents();
    
    fixture = TestBed.createComponent(DistrictEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
