import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HelloPage } from '../hello/hello';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToPage(message) {
    this.navCtrl.push(HelloPage, {
      'msg': message
    });
  }

  goToAboutPage() {
    this.navCtrl.push(AboutPage);
  }

  goToAboutPageAsRoot() {
    this.navCtrl.setRoot(AboutPage);
  }

}
