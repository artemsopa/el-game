import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolverService {

  constructor(private product: ProductsService, private route: ActivatedRoute) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Product> {
  
    return this.product.getProduct(route.params.slug).pipe(

      );
  }
}
