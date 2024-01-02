import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RockClimbingWallSeasonalEditTableComponent } from './rock-climbing-wall-seasonal-edit-table.component';
import { MatTableModule } from '@angular/material/table';

describe('RockClimbingWallSeasonalEditTableComponent', () => {
  let component: RockClimbingWallSeasonalEditTableComponent;
  let fixture: ComponentFixture<RockClimbingWallSeasonalEditTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RockClimbingWallSeasonalEditTableComponent],
      imports: [
        MatTableModule
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RockClimbingWallSeasonalEditTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
