import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //backend isteginde bulunma
import { ProductResponseModel } from '../models/productResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = 'https://localhost:44323/api/products/getall';

  constructor(private httpClient: HttpClient) { }

  getProducts() : Observable<ProductResponseModel> { //sucsribe olunabilir model
    return this.httpClient.get<ProductResponseModel>(this.apiUrl);
  }
}
