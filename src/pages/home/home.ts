import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BookingPage} from '../booking/booking'; 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  press(){
	this.navCtrl.push(BookingPage)


 }

}

}
