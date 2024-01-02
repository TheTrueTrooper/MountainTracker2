import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RockClimbingRouteEditComponent } from './rock-climbing-route-edit.component';
import { FocusSelectorComponent } from '../focus-selector/focus-selector.component';
import { MockComponent } from 'ng-mocks';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

describe('RockClimbingRouteEditComponent', () => {
  let component: RockClimbingRouteEditComponent;
  let fixture: ComponentFixture<RockClimbingRouteEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RockClimbingRouteEditComponent,
        MockComponent(FocusSelectorComponent),
        MockComponent(RockClimbingRouteEditComponent),
    ],
    imports: [
      CommonModule,
      MatCardModule,
      MatSelectModule,
      FontAwesomeModule,
    ]})
    .compileComponents();
    
    fixture = TestBed.createComponent(RockClimbingRouteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
