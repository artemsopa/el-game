import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-hometwo-banner',
    templateUrl: './hometwo-banner.component.html',
    styleUrls: ['./hometwo-banner.component.scss']
})
export class HometwoBannerComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    homeSlides: OwlOptions = {
		items: 1,
		nav: true,
		margin: 25,
		loop: true,
		dots: false,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		autoplay: true,
		autoplayHoverPause: true,
		navText: [
			"<i class='fas fa-long-arrow-alt-left'></i>",
			"<i class='fas fa-long-arrow-alt-right'></i>",
		]
    }

}