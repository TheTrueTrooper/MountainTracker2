import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RockClimbingWallEditComponent } from './rock-climbing-wall-edit.component';
import { MockComponent } from 'ng-mocks';
import { FocusSelectorComponent } from '../focus-selector/focus-selector.component';
import { GeoFenceEditTableComponent } from '../geo-fence-edit-table/geo-fence-edit-table.component';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RockClimbingWallSeasonalEditTableComponent } from '../rock-climbing-wall-seasonal-edit-table/rock-climbing-wall-seasonal-edit-table.component';
import { CommonModule } from '@angular/common';

describe('RockClimbingWallEditComponent', () => {
  let component: RockClimbingWallEditComponent;
  let fixture: ComponentFixture<RockClimbingWallEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RockClimbingWallEditComponent,
        MockComponent(FocusSelectorComponent),
        MockComponent(RockClimbingWallEditComponent),
        MockComponent(GeoFenceEditTableComponent),
        MockComponent(RockClimbingWallSeasonalEditTableComponent)
    ],
    imports: [
      CommonModule,
      MatCardModule,
      MatSelectModule,
      FontAwesomeModule,
    ]})
    .compileComponents();
    
    fixture = TestBed.createComponent(RockClimbingWallEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
