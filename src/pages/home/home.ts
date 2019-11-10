import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HelloPage } from '../hello/hello';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToPage() {
    this.navCtrl.push(HelloPage);
  }

}
