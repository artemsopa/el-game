import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { Observable } from 'rxjs';
import { CartService } from '../../../cart.service';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from 'src/app/modal.service';

@Component({
    selector: 'app-dynamic-products-details-page',
    templateUrl: './dynamic-products-details-page.component.html',
    styleUrls: ['./dynamic-products-details-page.component.scss'],
})
export class DynamicProductsDetailsPageComponent implements OnInit {
    private readonly notifier: NotifierService;
    public slug: any;
    public data!: Product;

    myForm : FormGroup = new FormGroup({
        "text": new FormControl(""),
        "text2": new FormControl("")
    });
    
      subscribe() {
        this.myForm.controls['text'].setValue("")
        this.myForm.controls['text2'].setValue("")
        this.cst = 5
        let url = this.router.url
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
            this.router.navigate([url]);
          });
      }

      cst = 5

      mins(){
          if(this.cst != 1){
              this.cst = this.cst -1
          }
      }
      pls(){
        if(this.cst != 5){
            this.cst = this.cst + 1
        }
    }
    loading = false;

    constructor(
        private ps: ProductsService,
        private httpClient: HttpClient,
        private modalService: NgbModal,
        private cartService: CartService,
        private modalViewService: ModalService,
        private activatedRoute: ActivatedRoute,
        private route: ActivatedRoute,
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

  ngOnInit(){
    this.route.params.subscribe((param: any) => {
        this.activatedRoute.data.subscribe((response: any) => {
            console.log('PRODUCT FETCHING', response);
            this.data = response.products;
            console.log('PRODUCT FETCHED');
          });
      });
  }

    addToCart(product: Product, quantity: number) {
        this.cartService.addToCart(product, quantity);
        this.notifier.notify('success', 'Your product added to the cart!');
    }

    productsSlides: OwlOptions = {
        items: 1,
        nav: true,
        loop: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        navText: [
            "<i class='fas fa-chevron-left'></i>",
            "<i class='fas fa-chevron-right'></i>",
        ],
    };

    counter(i: number) {
        return new Array(i);
    }

    // Input Counter
    inputnumber = 1;
    plus() {
        this.inputnumber = this.inputnumber + 1;
    }
    minus() {
        this.inputnumber != 1;
        {
            this.inputnumber = this.inputnumber - 1;
        }
    }
}
