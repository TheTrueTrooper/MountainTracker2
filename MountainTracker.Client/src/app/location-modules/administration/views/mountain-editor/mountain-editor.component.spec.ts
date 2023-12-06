import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MountainEditorComponent } from './mountain-editor.component';

describe('MountainEditorComponent', () => {
  let component: MountainEditorComponent;
  let fixture: ComponentFixture<MountainEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MountainEditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MountainEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
