import { Component,ViewChild,ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import  { GoogleMaps,GoogleMap} from '@ionic-native/google-maps';

/**
 * Generated class for the FindusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-findus',
  templateUrl: 'findus.html',
})
export class FindusPage {
	@ViewChild('map')mapElement: ElementRef;
	map:GoogleMap;


  constructor(public navCtrl: NavController,private _googleMaps:GoogleMaps) {
  }
  
ngAfterViewInit(){
	this.initMap();

} 
initMap(){
	let element= this.mapElement.nativeElement;
	this.map= this._googleMaps.create(element)
}
}
