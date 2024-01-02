import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoFenceEditTableComponent } from './geo-fence-edit-table.component';
import { MatTableModule } from '@angular/material/table';

describe('RegionGeoFenceEditTableComponent', () => {
  let component: GeoFenceEditTableComponent;
  let fixture: ComponentFixture<GeoFenceEditTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeoFenceEditTableComponent],
      imports: [
        MatTableModule
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeoFenceEditTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
