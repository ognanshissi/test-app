import { IProduct } from '../../core/models';
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  @Input() product: IProduct = {
    id: '1',
    name: 'Canish',
    description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.',
    qty: 12,
    price: 200,
    thumbnail: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
  };

  constructor() { }

  ngOnInit(): void {}

  addCart(): void {
    // add the product to the cart here
    console.log(this.product);
  }
}
