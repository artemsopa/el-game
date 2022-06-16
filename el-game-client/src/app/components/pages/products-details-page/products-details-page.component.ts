import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-products-details-page',
    templateUrl: './products-details-page.component.html',
    styleUrls: ['./products-details-page.component.scss']
})
export class ProductsDetailsPageComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
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
		]
    }

	// Input Counter
	inputnumber = 1;
	plus(){
		this.inputnumber = this.inputnumber+1;
	}
	minus(){(this.inputnumber != 1)
		{
			this.inputnumber = this.inputnumber-1;
		}
	}

}