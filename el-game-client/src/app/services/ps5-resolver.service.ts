import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from '../models/product';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class PS5ResolverService implements Resolve<any> {

  constructor(private product: ProductsService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<Array<Product>> {
    return this.product.getAllPSProducts().pipe(
      
    );
  }

}
