import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTableComponent } from './edit-table.component';
import { MatTableModule } from '@angular/material/table';

describe('RegionEditTableComponent', () => {
  let component: EditTableComponent;
  let fixture: ComponentFixture<EditTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditTableComponent],
      imports: [
        MatTableModule
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
