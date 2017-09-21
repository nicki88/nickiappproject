import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'booking.html',
})
export class BookingPage {


  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl:ToastController) {
  }
success(){

  let toast = this.toastCtrl.create({
    message: 'successful',
    duration: 2000,
    position: 'bottom'
  });

    toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}
ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }
public event = {
    month: '1990-02-19',
    timeStarts: '08:00',
    timeEnds: '1990-02-20'
  }

}
