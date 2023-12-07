import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvinceOrStateEditComponent } from './province-or-state-edit.component';

describe('ProvinceOrStateEditComponent', () => {
  let component: ProvinceOrStateEditComponent;
  let fixture: ComponentFixture<ProvinceOrStateEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProvinceOrStateEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProvinceOrStateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
