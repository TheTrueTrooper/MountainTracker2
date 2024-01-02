import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';
import { CountryEditComponent } from './country-edit.component';
import { MatCardModule } from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatSelectModule } from '@angular/material/select';
import { FocusSelectorComponent } from '../focus-selector/focus-selector.component';
import { EditTableComponent } from '../edit-table/edit-table.component';
import { faFlag } from '@fortawesome/free-solid-svg-icons';

describe('CountryEditComponent', () => {
  let component: CountryEditComponent;
  let fixture: ComponentFixture<CountryEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CountryEditComponent,
        MockComponent(FocusSelectorComponent),
        MockComponent(EditTableComponent)
      ],
      imports: [
        MatCardModule,
        MatSelectModule,
        FontAwesomeModule,
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountryEditComponent);
    component = fixture.componentInstance;
    component.cardIcon = faFlag;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
