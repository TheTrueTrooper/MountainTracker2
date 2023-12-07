import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvinceOrStateEditTableComponent } from './province-or-state-edit-table.component';

describe('ProvinceOrStateEditTableComponent', () => {
  let component: ProvinceOrStateEditTableComponent;
  let fixture: ComponentFixture<ProvinceOrStateEditTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProvinceOrStateEditTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProvinceOrStateEditTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
