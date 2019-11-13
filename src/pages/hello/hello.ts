import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { Observable } from 'rxjs/Observable';
import { Product } from '../../model/product.model';

@IonicPage()
@Component({
  selector: 'page-hello',
  templateUrl: 'hello.html',
})
export class HelloPage implements OnInit {
  id;
  product: Observable<Product>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public httpService: HttpServiceProvider
  ) {
    //let id = this.navParams.get('id');
    this.id = this.navParams.get('productId');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelloPage');
  }

  ngOnInit() {
    this.httpService.get(`products/${this.id}`).subscribe(data => this.product = data);
  }

}
