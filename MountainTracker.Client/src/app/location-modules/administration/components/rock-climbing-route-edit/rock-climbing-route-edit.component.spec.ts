import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RockClimbingRouteEditComponent } from './rock-climbing-route-edit.component';

describe('RockClimbingRouteEditComponent', () => {
  let component: RockClimbingRouteEditComponent;
  let fixture: ComponentFixture<RockClimbingRouteEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RockClimbingRouteEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RockClimbingRouteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
