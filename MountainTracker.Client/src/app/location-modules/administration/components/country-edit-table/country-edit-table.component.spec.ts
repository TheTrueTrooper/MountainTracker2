import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryEditTableComponent } from './country-edit-table.component';

describe('CountryEditTableComponent', () => {
  let component: CountryEditTableComponent;
  let fixture: ComponentFixture<CountryEditTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CountryEditTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountryEditTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
