import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryEditComponent } from './country-edit.component';
import { MatCardModule } from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatSelectModule } from '@angular/material/select';

describe('CountryEditComponent', () => {
  let component: CountryEditComponent;
  let fixture: ComponentFixture<CountryEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CountryEditComponent],
      imports: [
        MatCardModule,
        MatSelectModule,
        FontAwesomeModule,
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
