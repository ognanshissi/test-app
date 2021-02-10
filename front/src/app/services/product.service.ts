import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = `${environment.baseUrl}`;

  constructor(private http : HttpClient) { }

  all() {
    return this.http.get<{ status: string; products: any; }>(this.url+'products');
  }

}
