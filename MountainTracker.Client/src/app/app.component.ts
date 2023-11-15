import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OpenStreetMapModule, TargetOSMSourceFactory } from './open-street-map';
import { CommonModule } from '@angular/common';
import { PannellumEquirectangularConfig, PannellumPanoramaModule } from './pannellum';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, OpenStreetMapModule, PannellumPanoramaModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MountainTracker';

  protected readonly mapSource = TargetOSMSourceFactory;

  Options: PannellumEquirectangularConfig = { autoLoad: true } as PannellumEquirectangularConfig
}
