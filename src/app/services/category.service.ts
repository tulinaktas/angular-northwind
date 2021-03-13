import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //backend isteginde bulunma
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { ListResponseModel } from '../models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl = 'https://localhost:44323/api/categories/getall';

  constructor(private httpClient: HttpClient) { }
 
  getCategories() : Observable<ListResponseModel<Category>> { //sucsribe olunabilir model
    return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl);
  }
}