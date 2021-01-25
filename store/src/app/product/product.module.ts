import { NgModule } from '@angular/core';
import { SingleProductComponent } from './single-product/single-product.component';
import {RouterModule, Routes} from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import {SharedModule} from '../shared/shared.module';


const routes: Routes = [
  {
    path: '',
    component: ProductListComponent
  }
];


@NgModule({
  declarations: [SingleProductComponent, ProductListComponent],
  imports: [SharedModule, RouterModule.forChild(routes)]
})
export class ProductModule { }
