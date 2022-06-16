import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homethree-trending-products',
    templateUrl: './homethree-trending-products.component.html',
    styleUrls: ['./homethree-trending-products.component.scss']
})
export class HomethreeTrendingProductsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    bgImage = [
        {
            img: `assets/img/girl.jpg`
        }
    ]

}