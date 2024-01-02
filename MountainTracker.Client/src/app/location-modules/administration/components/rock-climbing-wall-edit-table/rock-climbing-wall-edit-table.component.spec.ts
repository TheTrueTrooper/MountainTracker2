import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RockClimbingWallEditTableComponent } from './rock-climbing-wall-edit-table.component';
import { MatTableModule } from '@angular/material/table';

describe('RockClimbingWallEditTableComponent', () => {
  let component: RockClimbingWallEditTableComponent;
  let fixture: ComponentFixture<RockClimbingWallEditTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RockClimbingWallEditTableComponent],
      imports: [
        MatTableModule
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RockClimbingWallEditTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
