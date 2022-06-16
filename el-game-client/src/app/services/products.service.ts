import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient,
  ) { }

  getAllProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`https://vaxim.herokuapp.com/api/product`);
  }

  getAllPSProducts(): Observable<Array<Product>>{
    return this.http.get<Array<Product>>(`https://vaxim.herokuapp.com/api/product?type_url=ps-5`);
  }

  getAllXboxProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`https://vaxim.herokuapp.com/api/product?type_url=xbox`);
  }

  getAllAppleProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`https://vaxim.herokuapp.com/api/product?type_url=apple`);
  }

  getAllVCProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`https://vaxim.herokuapp.com/api/product?type_url=vc`);
  }

  getAllCPUProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`https://vaxim.herokuapp.com/api/product?type_url=cpu`);
  }

  getAllAppleLaptopProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`https://vaxim.herokuapp.com/api/product?type_url=apple_laptop`);
  }

  getAllAsusLaptopProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`https://vaxim.herokuapp.com/api/product?type_url=asus_laptop`);
  }

  getAllSamsungPhonesProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`https://vaxim.herokuapp.com/api/product?type_url=samsung_phones`);
  }

  getProduct(slug: string): Observable<Product>{
    return this.http.get<Product>(`https://vaxim.herokuapp.com/api/product/` + slug);
  }
}
