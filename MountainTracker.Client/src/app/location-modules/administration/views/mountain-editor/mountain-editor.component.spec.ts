import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MountainEditorComponent } from './mountain-editor.component';
import { CommonModule } from '@angular/common';
import { MockComponent } from 'ng-mocks';
import { AreaEditComponent, CountryEditComponent, DistrictEditComponent, ProvinceOrStateEditComponent, RegionEditComponent, RockClimbingRouteEditComponent, RockClimbingWallEditComponent, ZoneEditComponent } from '../../components';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

describe('MountainEditorComponent', () => {
  let component: MountainEditorComponent;
  let fixture: ComponentFixture<MountainEditorComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MountainEditorComponent,
        MockComponent(CountryEditComponent),
        MockComponent(ProvinceOrStateEditComponent),
        MockComponent(RegionEditComponent),
        MockComponent(DistrictEditComponent),
        MockComponent(ZoneEditComponent),
        MockComponent(AreaEditComponent),
        MockComponent(RockClimbingWallEditComponent),
        MockComponent(RockClimbingRouteEditComponent),
      ],
      imports: [
        CommonModule,
      ],
      providers: [
        provideMockStore({ })
      ]
    })
    .compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(MountainEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
