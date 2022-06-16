import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-subscribe',
    templateUrl: './subscribe.component.html',
    styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    bgImage = [
        {
            img: `https://cdn1.dotesports.com/wp-content/uploads/2021/09/30131151/ps5.png`
        }
    ]

    myForm : FormGroup = new FormGroup({
        "email": new FormControl("", [
                    Validators.required, 
                    Validators.email
        ])
    });
    
      subscribe() {
        this.myForm.controls['email'].setValue("")
      }

}