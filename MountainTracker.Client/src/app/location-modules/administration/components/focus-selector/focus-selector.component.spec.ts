import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionalSelectorComponent } from './focus-selector.component';

describe('RegionalSelectorComponent', () => {
  let component: RegionalSelectorComponent;
  let fixture: ComponentFixture<RegionalSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegionalSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegionalSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
