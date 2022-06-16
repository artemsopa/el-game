import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {
    NgbModalConfig,
    ModalDismissReasons,
    NgbModal,
} from '@ng-bootstrap/ng-bootstrap';
import { NotifierService } from 'angular-notifier';
import { CartService } from '../../../../cart.service';
import { ModalService } from '../../../../modal.service';
import { HttpClient } from "@angular/common/http";
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
    selector: 'app-homethree-products',
    templateUrl: './homethree-products.component.html',
    styleUrls: ['./homethree-products.component.scss'],
	providers: [ NgbModalConfig, NgbModal ]
})
export class HomethreeProductsComponent implements OnInit {

    modalProduct = this.modalViewService.getProduct();
    private readonly notifier: NotifierService;
    closeModal: any;
  
	constructor(
        private httpClient: HttpClient,
        private modalService: NgbModal,
        private cartService: CartService,
        private modalViewService: ModalService,
        private ps: ProductsService,
        notifierService: NotifierService
    ) {
        this.notifier = notifierService;
    }

	products: any = [];

    playst: any = [];
    xbox: any = [];
    apple: any = [];
    vc: any = [];
    cpu: any = [];

    ngOnInit(){
        this.getPS();
        this.getXbox();
        this.getApple();
        this.getVC();
        this.getCPU();
    }

    getPS() {
        this.ps.getAllPSProducts().subscribe(res => {
            this.playst = res
            this.playst.length = 6;
        })
    }

    getXbox() {
        this.ps.getAllXboxProducts().subscribe(res => {
            this.xbox = res
            this.xbox.length = 6;
        })
    }

    getApple() {
        this.ps.getAllAppleProducts().subscribe(res => {
            this.apple = res
            this.apple.length = 6;
        })
    }

    getVC() {
        this.ps.getAllVCProducts().subscribe(res => {
            this.vc = res
            this.vc.length = 6;
        })
    }

    getCPU() {
        this.ps.getAllCPUProducts().subscribe(res => {
            this.cpu = res
            this.cpu.length = 6;
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

}