import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionEditComponent } from './region-edit.component';
import { MockComponent } from 'ng-mocks';
import { FocusSelectorComponent } from '../focus-selector/focus-selector.component';
import { EditTableComponent } from '../edit-table/edit-table.component';
import { GeoFenceEditTableComponent } from '../geo-fence-edit-table/geo-fence-edit-table.component';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('RegionEditComponent', () => {
  let component: RegionEditComponent;
  let fixture: ComponentFixture<RegionEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegionEditComponent,
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
    
    fixture = TestBed.createComponent(RegionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
