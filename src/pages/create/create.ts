import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Product } from '../../model/product.model';
import { HttpServiceProvider } from '../../providers/http-service/http-service';

/**
 * Generated class for the CreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
    private httpService: HttpServiceProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePage');
  }

  createProduct() {
    this.httpService.post('products', this.product).subscribe(res => console.log(res));
  }
}
