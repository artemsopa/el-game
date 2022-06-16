import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-hometwo-ads',
    templateUrl: './hometwo-ads.component.html',
    styleUrls: ['./hometwo-ads.component.scss']
})
export class HometwoAdsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    bgImage = [
        {
            img: `assets/img/collection/collection6.jpg`
        }
    ]

}