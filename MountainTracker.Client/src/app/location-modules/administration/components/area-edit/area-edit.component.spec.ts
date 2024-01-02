import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaEditComponent } from './area-edit.component';
import { FocusSelectorComponent } from '../focus-selector/focus-selector.component';
import { EditTableComponent } from '../edit-table/edit-table.component';
import { MockComponent } from 'ng-mocks';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import { GeoFenceEditTableComponent } from '../geo-fence-edit-table/geo-fence-edit-table.component';

describe('AreaEditComponent', () => {
  let component: AreaEditComponent;
  let fixture: ComponentFixture<AreaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AreaEditComponent,
        MockComponent(FocusSelectorComponent),
        MockComponent(EditTableComponent),
        MockComponent(GeoFenceEditTableComponent)
      ],
      imports: [
        MatCardModule,
        MatSelectModule,
        FontAwesomeModule,
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AreaEditComponent);
    component = fixture.componentInstance;
    component.cardIcon = faFlag;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
