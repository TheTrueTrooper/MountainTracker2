import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionEditorComponent } from './region-editor.component';

describe('RegionEditorComponent', () => {
  let component: RegionEditorComponent;
  let fixture: ComponentFixture<RegionEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegionEditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegionEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
