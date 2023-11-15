import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OpenStreetMapModule, TargetOSMSourceFactory } from './open-street-map';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, OpenStreetMapModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MountainTracker';

  protected readonly mapSource = TargetOSMSourceFactory;
}
