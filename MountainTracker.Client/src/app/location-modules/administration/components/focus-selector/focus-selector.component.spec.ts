import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FocusSelectorComponent } from './focus-selector.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { labeled } from '../../../../models';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatSelectHarness } from '@angular/material/select/testing';

class MockLabeled implements labeled {
  id?:number
  selectLabel?:string
}

describe('FocusSelectorComponent', () => {
  let component: FocusSelectorComponent;
  let fixture: ComponentFixture<FocusSelectorComponent>;
  let loader: HarnessLoader;
  let select: MatSelectHarness; 
  const sharedOptions: MockLabeled[] = [
    {id: 0, selectLabel: "test-0"},
    {id: 1, selectLabel: "test-1"},
    {id: 2, selectLabel: "test-2"},
    {id: 3, selectLabel: "test-3"}
  ] as MockLabeled[]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FocusSelectorComponent],
      imports:[
        NoopAnimationsModule,
        CommonModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FocusSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
    select = await loader.getHarness<MatSelectHarness>(MatSelectHarness);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create with options', (done) => {
    const TestNoSelectLabel = "Select an Option"
    component.selectOptions = sharedOptions;

    fixture.detectChanges();

    fixture.whenStable().then( async () => {
      expect(component).toBeTruthy();
      await select.open()
      const options = await select.getOptions();
      const nonSelectSelectionOption = await options[0].getText();
      const firstSelectionOption = await options[1].getText();
      expect(options.length).toBeGreaterThan(0);
      expect(options.length).toBe(5);
      expect(nonSelectSelectionOption).toBe(TestNoSelectLabel);
      expect(firstSelectionOption).toBe('test-0');
      done();
   });
  });

  it('should create with options and label overrides', (done) => {
    const TestNoSelectLabel = "test"
    component.selectOptions = sharedOptions;
    component.noSelectLabel = TestNoSelectLabel

    fixture.detectChanges();

    fixture.whenStable().then( async () => {
      expect(component).toBeTruthy();
      await select.open()
      const options = await select.getOptions();
      const nonSelectSelectionOption = await options[0].getText();
      const firstSelectionOption = await options[1].getText();
      expect(options.length).toBeGreaterThan(0);
      expect(options.length).toBe(5);
      expect(nonSelectSelectionOption).toBe(TestNoSelectLabel);
      expect(firstSelectionOption).toBe('test-0');
      done();
   });
  });

  it('should emit selection', (done) => {
    component.selectOptions = sharedOptions;

    fixture.detectChanges();

    fixture.whenStable().then( async () => {
      spyOn(component.itemSelected, 'emit');
      await select.open();
      const options = await select.getOptions();
      await options[1].click();
      fixture.detectChanges();
      await fixture.whenStable()
      expect(component.itemSelected.emit).toHaveBeenCalled();
      expect(component.itemSelected.emit).toHaveBeenCalledTimes(1);
      expect(component.itemSelected.emit).toHaveBeenCalledOnceWith(0);
      done();
   });
  });

  it('should emit no selection selection', (done) => {
    component.selectOptions = sharedOptions;

    fixture.detectChanges();

    fixture.whenStable().then( async () => {
      spyOn(component.itemSelected, 'emit');
      await select.open();
      const options = await select.getOptions();
      await options[0].click();
      fixture.detectChanges();
      expect(component.itemSelected.emit).toHaveBeenCalled();
      expect(component.itemSelected.emit).toHaveBeenCalledTimes(1);
      expect(component.itemSelected.emit).toHaveBeenCalledOnceWith(null);
      done();
   });
  });
});