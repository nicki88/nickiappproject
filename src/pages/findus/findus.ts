import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
 
declare var google;
 
@Component({
  selector: 'findus-page',
  templateUrl: 'findus.html'
})
export class FindusPage {
 
  @ViewChild('map') mapElement: ElementRef;
  map: any;
 
  constructor(public navCtrl: NavController) {
 
  }
 
  ionViewDidLoad(){
    this.loadMap();
  }

  loadMap(){
 
    let latLng = new google.maps.LatLng(3.136984, 101.68744);
 
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
 
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
 
  }
}