import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Product } from '../../model/product.model';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { ToastProvider } from '../../providers/toast/toast';
import { HomePage } from '../home/home';
import { FormGroup, FormControl } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
})
export class CreatePage implements OnInit {
  product: Product = {
    name: null
  }

  productForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private httpService: HttpServiceProvider,
    public toastService: ToastProvider
  ) {
  }

  ngOnInit() {
    this.productForm = new FormGroup({
      'name': new FormControl('')
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePage');
  }

  createProduct() {
    this.httpService.post('products', this.productForm.value).subscribe(res => {
      this.toastService.createToast('Successfully create product');
      this.navCtrl.setRoot(HomePage);
    });
  }
}
