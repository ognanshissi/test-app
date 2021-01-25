import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  @Input() product: { id: number, name: string, description: string, qty: number, price: number } = {
    id: 1,
    name: 'Canish',
    description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.',
    qty: 12,
    price: 200
  } ;

  constructor() { }

  ngOnInit(): void {
  }
  addCart() {
    // add the product to the cart here
  }
}
