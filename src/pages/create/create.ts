import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Product } from '../../model/product.model';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { ToastProvider } from '../../providers/toast/toast';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
})
export class CreatePage {
  product: Product = {
    name: null
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private httpService: HttpServiceProvider,
    public toastService: ToastProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePage');
  }

  createProduct() {
    this.httpService.post('products', this.product).subscribe(res => {
      this.toastService.createToast('Successfully create product');
      this.navCtrl.setRoot(HomePage);
    });
  }
}
