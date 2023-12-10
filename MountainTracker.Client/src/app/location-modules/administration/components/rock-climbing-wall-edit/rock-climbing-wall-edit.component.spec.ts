import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RockClimbingWallEditComponent } from './rock-climbing-wall-edit.component';

describe('RockClimbingWallEditComponent', () => {
  let component: RockClimbingWallEditComponent;
  let fixture: ComponentFixture<RockClimbingWallEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RockClimbingWallEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RockClimbingWallEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
