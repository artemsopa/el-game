import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from '../../../cart.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    cartProducts = this.cartService.getItems();

    constructor(
        public router: Router,
        private _location: Location,
        private cartService: CartService
    ) { }

    ngOnInit(): void {
    }

    title: string = "";
    static searchTTL: string = "";

    Search() {
        if(this.title == ""){
            this._location.back();
        }
        NavbarComponent.searchTTL = this.title
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.router.navigate(["/search"]);
        });
    }

    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

}