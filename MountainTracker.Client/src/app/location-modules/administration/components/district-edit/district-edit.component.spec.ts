import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictEditComponent } from './district-edit.component';

describe('DistrictEditComponent', () => {
  let component: DistrictEditComponent;
  let fixture: ComponentFixture<DistrictEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DistrictEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DistrictEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
