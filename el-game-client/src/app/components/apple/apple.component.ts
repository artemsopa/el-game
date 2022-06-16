import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NotifierService } from 'angular-notifier';
import { CartService } from 'src/app/cart.service';
import { ModalService } from 'src/app/modal.service';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-apple',
  templateUrl: './apple.component.html',
  styleUrls: ['./apple.component.scss']
})
export class AppleComponent implements OnInit {

  
  modalProduct = this.modalViewService.getProduct();
  private readonly notifier: NotifierService;
  closeModal: any;
  loading = false;

  constructor(
      private ps: ProductsService,
      private httpClient: HttpClient,
      private modalService: NgbModal,
      private cartService: CartService,
      private modalViewService: ModalService,
      private activatedRoute: ActivatedRoute,
      public router: Router,
      notifierService: NotifierService
  ) {
      this.notifier = notifierService;

      this.router.events.subscribe(ev => {
        if (ev instanceof NavigationStart) {
          this.loading = true;
        }
        if (
          ev instanceof NavigationEnd ||
          ev instanceof NavigationCancel ||
          ev instanceof NavigationError
        ) {
          this.loading = false;
        }
      });
  }

  products = Array<Product>()

  ngOnInit(){
    this.activatedRoute.data.subscribe((response: any) => {
      console.log('PRODUCT FETCHING', response);
      this.products = response.products;
      console.log('PRODUCT FETCHED');
    });
  }

  addToCart(product: Product) {
      this.cartService.addToCart(product);
      this.notifier.notify('success', 'Your product added to the cart!');
  }

  addToModal(product: Product) {
      this.modalViewService.addToModal(product);
  }

  triggerModal(content: any) {
      this.modalService
      .open(content, { windowClass: 'productsQuickView', centered: true })
      .result.then(
          (res) => {
              this.closeModal = `Closed with: ${res}`;
          },
          (res) => {
              this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
          }
      );
  }

  private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
          return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
          return 'by clicking on a backdrop';
      } else {
          return `with: ${reason}`;
      }
  }

  shopGrid: number = 1;

  PriceLow() {
    this.ps.getAllAppleProducts().subscribe((res: Array<Product>) => {
      this.products = res
      this.products = this.products.sort(function(a,b): any{
        return b.currentPrice - a.currentPrice;
      })
    })
  }

  PriceHigh() {
    this.products = this.products.sort(function(a,b): any{
      return a.currentPrice - b.currentPrice;
    })
  }

  Default() {
    this.ps.getAllAppleProducts().subscribe((res: Array<Product>) => {
      this.products = res
    })
  }

  DateLow() {
    this.products = this.products.sort(function(a,b): any{
      return Date.parse(b.updatedAt) - Date.parse(a.updatedAt);
    })
  }

  DateHigh() {
    this.products = this.products.sort(function(a,b): any{
      return Date.parse(a.updatedAt) - Date.parse(b.updatedAt);
    })
  }

}
