import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { Product } from '../../model/product.model';

@IonicPage()
@Component({
  selector: 'page-hello',
  templateUrl: 'hello.html',
})
export class HelloPage implements OnInit {
  id;
  product: Product = {
    name: null,
    id: null
  };

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
    this.httpService.getById(`products/${this.id}`).subscribe(data => this.product = data);
  }

  updateProduct() {
    this.httpService.put(`products/${this.product.id}`, this.product).subscribe(data => console.log(data));
  }

  deleteProduct() {
    this.httpService.delete(`products/${this.product.id}`).subscribe(data => console.log(data));
  }

}
