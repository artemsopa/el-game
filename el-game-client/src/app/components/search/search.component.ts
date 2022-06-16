import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NotifierService } from 'angular-notifier';
import { CartService } from 'src/app/cart.service';
import { ModalService } from 'src/app/modal.service';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
import { NavbarComponent } from '../common/navbar/navbar.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  
  modalProduct = this.modalViewService.getProduct();
  private readonly notifier: NotifierService;
  closeModal: any;

  constructor(
      private ps: ProductsService,
      private httpClient: HttpClient,
      private modalService: NgbModal,
      private cartService: CartService,
      private modalViewService: ModalService,
      notifierService: NotifierService
  ) {
      this.notifier = notifierService;
  }

  products = Array<Product>()

  ngOnInit(){
      this.ps.getAllProducts().subscribe((res: Array<Product>) => {
        this.products = res
        this.products = this.products.filter(res => {
          return res.title.toLocaleLowerCase().match(NavbarComponent.searchTTL.toLocaleLowerCase( ))
        })
      })
      
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
    this.products = this.products.sort(function(a,b): any{
      return b.currentPrice - a.currentPrice;
    })
  }

  PriceHigh() {
    this.products = this.products.sort(function(a,b): any{
      return a.currentPrice - b.currentPrice;
    })
  }

  Default() {
    this.ps.getAllPSProducts().subscribe((res: Array<Product>) => {
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
