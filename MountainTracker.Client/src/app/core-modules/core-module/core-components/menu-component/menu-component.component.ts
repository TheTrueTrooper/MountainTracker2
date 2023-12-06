import { Component } from '@angular/core';
import { faGear, faMountainSun, faBell, faMountain } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu-component.component.html',
  styleUrl: './menu-component.component.scss'
})
export class MenuComponent {
  protected faBell = faBell;
  protected faMountainSun = faMountainSun;
  protected faGear = faGear;
  protected faMountain = faMountain;
}
