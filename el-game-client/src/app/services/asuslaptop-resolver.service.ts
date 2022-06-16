import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class AsuslaptopResolverService implements Resolve<any> {

  
  constructor(private product: ProductsService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<Array<Product>> {
    return this.product.getAllAsusLaptopProducts().pipe(
      
    );
  }
}
