import { TargetOSMap } from "../models"

export const TargetOSMSourceFactory = 
{
  OSMap: function() {
    return new TargetOSMap('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors')
  },
  CyclOSMap: function() {
    return new TargetOSMap('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors')
  },
  OpenTopoMap: function() {
    return new TargetOSMap('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors')
  },
  PianoOSMap: function() {
    return new TargetOSMap('https://{s}.piano.tiles.quaidorsay.fr/fr/{z}/{x}/{y}.png', 'Tiles <a href="https://github.com/tilery/pianoforte">PianoFr</a> | &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors')
  },
  OverlaySources:{
    CyclOSMapLite: function() {
      return new TargetOSMap('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm-lite/{z}/{x}/{y}.png', 'CyclOSM Lite')
    },
    WaymarkedTrails: function() {
      return new TargetOSMap('https://tile.waymarkedtrails.org/cycling/{z}/{x}/{y}.png', '<a href="https://cycling.waymarkedtrails.org/">https://cycling.waymarkedtrails.org/</a>')
    }
  }
}