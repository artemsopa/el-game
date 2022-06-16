import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-homethree-banner',
    templateUrl: './homethree-banner.component.html',
    styleUrls: ['./homethree-banner.component.scss']
})
export class HomethreeBannerComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

	bgImage = [
		{
			img: `assets/img/banner/banner-bg2.jpg`
		}
	]

    homeSlides: OwlOptions = {
		items: 1,
		nav: true,
		margin: 25,
		loop: true,
		dots: true,
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