import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { HomePage} from '../home/home';
//import { RegisterPage} from '../register/register';

//import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	Email='';
	Password='';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

 Login(){
 	this.navCtrl.push(HomePage);
 } 

createAccount(){
  this.navCtrl.push(HomePage);
}
 //FBLogin(){
 // this.fb.login(['public_profile', 'user_friends', 'email'])
  //.then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
  //.catch(e => console.log('Error logging into Facebook', e));


	//this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
	


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}




