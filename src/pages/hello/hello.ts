import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { Product } from '../../model/product.model';
import { ToastProvider } from '../../providers/toast/toast';
import { HomePage } from '../home/home';
import { FormGroup, FormControl } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-hello',
  templateUrl: 'hello.html',
})
export class HelloPage implements OnInit {
  id;
  productForm: FormGroup;
  product: Product = {
    name: null,
    id: null
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public httpService: HttpServiceProvider,
    public toastService: ToastProvider
  ) {
    //let id = this.navParams.get('id');
    this.id = this.navParams.get('productId');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelloPage');
  }

  ngOnInit() {
    this.productForm = new FormGroup({
      'id': new FormControl(''),
      'name': new FormControl('')
    });
    this.httpService.getById(`products/${this.id}`).subscribe(data => {
      this.productForm.setValue(data);
    });
  }

  updateProduct() {
    let product = this.productForm.value;

    this.httpService.put(`products/${product.id}`, product)
      .subscribe(data => {
        this.toastService.createToast('Successfully updated product');
        this.navCtrl.setRoot(HomePage);
      });
  }

  deleteProduct() {
    this.httpService.delete(`products/${this.productForm.value.id}`).subscribe(data => {
      this.toastService.createToast('Successfully delete product');
      this.navCtrl.setRoot(HomePage);
    });
  }

}
