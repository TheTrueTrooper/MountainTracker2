import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RockClimbingRouteEditTableComponent } from './rock-climbing-route-edit-table.component';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';

describe('RockClimbingRouteEditTableComponent', () => {
  let component: RockClimbingRouteEditTableComponent;
  let fixture: ComponentFixture<RockClimbingRouteEditTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RockClimbingRouteEditTableComponent],
      imports: [
        CommonModule,
        MatTableModule
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RockClimbingRouteEditTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
