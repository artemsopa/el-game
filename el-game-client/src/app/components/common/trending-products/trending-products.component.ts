import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {
    NgbModalConfig,
    ModalDismissReasons,
    NgbModal,
} from '@ng-bootstrap/ng-bootstrap';
import { NotifierService } from 'angular-notifier';
import { CartService } from '../../../cart.service';
import { ModalService } from '../../../modal.service';
import { HttpClient } from "@angular/common/http";
import { Product } from 'src/app/models/product';

@Component({
    selector: 'app-trending-products',
    templateUrl: './trending-products.component.html',
    styleUrls: ['./trending-products.component.scss'],
	providers: [ NgbModalConfig, NgbModal ]
})
export class TrendingProductsComponent implements OnInit {

    modalProduct = this.modalViewService.getProduct();
    private readonly notifier: NotifierService;
    closeModal: any;
  
	constructor(
        private httpClient: HttpClient,
        private modalService: NgbModal,
        private cartService: CartService,
        private modalViewService: ModalService,
        notifierService: NotifierService
    ) {
        this.notifier = notifierService;
    }

	products: any = [];

    ngOnInit(){
        this.httpClient.get("assets/data/trending.json").subscribe(data =>{
            this.products = data;
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

    productsSlides: OwlOptions = {
		nav: false,
		margin: 25,
		loop: true,
		dots: true,
		autoplay: false,
		autoplayHoverPause: true,
		navText: [
			"<i class='fas fa-chevron-left'></i>",
			"<i class='fas fa-chevron-right'></i>",
		],
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			},
			1200: {
				items: 3
			}
		}
    }

}