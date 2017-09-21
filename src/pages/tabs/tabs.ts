import { Component } from '@angular/core';

import { LoginPage } from '../login/login';
import { BookingPage } from '../booking/booking';
import { FindusPage} from '../findus/findus';
import { HomePage} from '../home/home'


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = LoginPage;
  tab2Root = HomePage;
  tab3Root = BookingPage;
  tab4Root = FindusPage;

  constructor() {

  }
}
