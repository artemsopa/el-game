import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-homethree-subscribe',
  templateUrl: './homethree-subscribe.component.html',
  styleUrls: ['./homethree-subscribe.component.scss']
})
export class HomethreeSubscribeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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
