import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-feedback',
    templateUrl: './feedback.component.html',
    styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    bgImage = [
        {
            img: `assets/img/feedback-bg.jpg`
        }
    ]

    feedbackSlides: OwlOptions = {
		items: 1,
		nav: true,
		loop: true,
		margin: 25,
		dots: false,
		autoplay: true,
		autoplayHoverPause: true,
		navText: [
			"<i class='fas fa-chevron-left'></i>",
			"<i class='fas fa-chevron-right'></i>",
		]
    }

}