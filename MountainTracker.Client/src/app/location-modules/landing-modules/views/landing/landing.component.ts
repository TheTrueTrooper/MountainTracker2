import { Component } from '@angular/core';
import { PannellumEquirectangularConfig, PannellumTour } from '../../../../core-modules/pannellum-module';
import { TargetOSMSourceFactory } from '../../../../core-modules/open-street-map-module';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

  protected readonly mapSource = TargetOSMSourceFactory;

  Options: PannellumEquirectangularConfig = { autoLoad: true } as PannellumEquirectangularConfig
  TourOptions: PannellumTour = {   
    default: {
        firstScene: "circle",
        author: "Matthew Petroff",
        sceneFadeDuration: 1000
    },
    scenes: {
        circle: {
            title: "Mason Circle",
            hfov: 110,
            pitch: -3,
            yaw: 117,
            type: "equirectangular",
            panorama: "https://pannellum.org/images/from-tree.jpg",
            hotSpots: [
                {
                    "pitch": -2.1,
                    "yaw": 132.9,
                    "type": "scene",
                    "text": "Spring House or Dairy",
                    "sceneId": "house"
                }
            ]
        },

        house: {
            title: "Spring House or Dairy",
            hfov: 110,
            yaw: 5,
            type: "equirectangular",
            panorama: "https://pannellum.org/images/bma-0.jpg",
            hotSpots: [
                {
                    pitch: -0.6,
                    yaw: 37.1,
                    type: "scene",
                    text: "Mason Circle",
                    sceneId: "circle",
                    targetYaw: -23,
                    targetPitch: 2
                }
            ]
        }
    }
} as PannellumTour
}
