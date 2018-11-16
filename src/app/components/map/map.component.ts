import { Component, OnInit } from '@angular/core';
import { MapService } from 'src/app/services/map.service';

declare var google;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styles: []
})
export class MapComponent implements OnInit {

  public lat;
  public long;

  constructor(
    public _mapService: MapService
  ) { }

  ngOnInit() {
    this.initMap();
  }

  getCurrentLocation() {

    this._mapService.getPosition().then(pos => {
      this.lat = pos.lat;
      this.long = pos.long;
      this.getMap(this.lat, this.long);
    });
  }
  initMap() {
    const coords = { lat: 41.39568889996, lng: 2.1922516 };
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: coords
    });
    return map;
  }

  getMap(lat, long) {
    const coords = { lat: lat, lng: long};
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: coords
    });

    const contentString =
      '<div>' +
      '<p><b>Latitude: </b>' + lat + '</p>' +
      '<p><b>Longitude: </b>' + long + '</p>' +
      '</div>';

    const infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    const marker = new google.maps.Marker({
      position: coords,
      map: map
    });

    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });

  }
}

