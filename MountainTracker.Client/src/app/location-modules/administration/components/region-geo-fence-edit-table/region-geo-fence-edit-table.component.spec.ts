import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionGeoFenceEditTableComponent } from './region-geo-fence-edit-table.component';

describe('RegionGeoFenceEditTableComponent', () => {
  let component: RegionGeoFenceEditTableComponent;
  let fixture: ComponentFixture<RegionGeoFenceEditTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegionGeoFenceEditTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegionGeoFenceEditTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
