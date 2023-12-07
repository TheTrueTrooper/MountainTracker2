import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionEditTableComponent } from './region-edit-table.component';

describe('RegionEditTableComponent', () => {
  let component: RegionEditTableComponent;
  let fixture: ComponentFixture<RegionEditTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegionEditTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegionEditTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
