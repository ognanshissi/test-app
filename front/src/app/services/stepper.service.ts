import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StepperService {
  private userInfo = {};
  private companie = {};
  private products:any[] = []


  addIUserInfo(item: any[]) {
    this.userInfo = item;
  }

  getItems() {
      return this.userInfo;
  }

  addCompanie(item: any[]) {
    this.companie = item;
  }
  getCompanie() {
    return this.companie;
  }

  addProduct(item: any[]) {
    this.products.push(item);
  }

  getProducts(): any[] {
    return this.products;
  }
}
