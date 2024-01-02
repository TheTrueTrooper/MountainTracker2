import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu-component.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {RouterTestingModule} from '@angular/router/testing';
import { Router } from '@angular/router';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { HarnessLoader } from '@angular/cdk/testing';
import { MatMenuItemHarness, MatMenuHarness } from '@angular/material/menu/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('MenuComponentComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let router: Router;  
  let loader: HarnessLoader;
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuComponent],
      imports: [
        CommonModule,
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        MatProgressBarModule,
        FontAwesomeModule,
        RouterTestingModule,
        NoopAnimationsModule,
      ],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navagate to home with home item click', async () => {
    const spy = spyOn(router, 'navigateByUrl');
    fixture.detectChanges();
    await fixture.whenStable();

    const homeButton = await loader.getHarness(MatMenuItemHarness.with({selector: "#home-nav"}));
    await homeButton.click();
-
    fixture.detectChanges();
    await fixture.whenStable();

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith( router.parseUrl(''), { skipLocationChange: false, replaceUrl: false, state: undefined });
  });

  it('should navagate to admin with admin item click', async () => {
    const spy = spyOn(router, 'navigateByUrl');
    fixture.detectChanges();
    await fixture.whenStable();

    const subContextMenu = await loader.getHarness(MatMenuHarness);
    await subContextMenu.open();

    const adminButton =  await subContextMenu.getHarness(MatMenuItemHarness.with({selector: "#admin-nav"}));
    await adminButton.click();
-
    fixture.detectChanges();
    await fixture.whenStable();

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith( router.parseUrl('/administration'), { skipLocationChange: false, replaceUrl: false, state: undefined });
  });
});
