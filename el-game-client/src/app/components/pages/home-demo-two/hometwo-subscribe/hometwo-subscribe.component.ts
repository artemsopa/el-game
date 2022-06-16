import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-hometwo-subscribe',
    templateUrl: './hometwo-subscribe.component.html',
    styleUrls: ['./hometwo-subscribe.component.scss']
})
export class HometwoSubscribeComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    bgImage = [
        {
            img: `assets/img/subscribe-img.jpg`
        }
    ]

}