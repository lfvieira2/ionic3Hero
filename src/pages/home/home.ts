import { AboutPage } from '../about/about';
import { Component, OnInit } from '@angular/core';
import { HelloPage } from '../hello/hello';
import { NavController } from 'ionic-angular';

import { HttpServiceProvider } from '../../providers/http-service/http-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  products;

  constructor(
    public navCtrl: NavController,
    public httpService: HttpServiceProvider
  ) {

  }

  ngOnInit() {
    this.products = this.httpService.get('products');
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

  goToSingle(productId) {
    this.navCtrl.push(HelloPage, {
      'productId': productId
    });
  }

}
