import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  myForm : FormGroup = new FormGroup({
    "email": new FormControl(""),
    "tel": new FormControl(""),
    "name": new FormControl(""),
    "message": new FormControl(""),
    "subj": new FormControl(""),
});

  subscribe() {
    this.myForm.controls['email'].setValue("")
    this.myForm.controls['tel'].setValue("")
    this.myForm.controls['name'].setValue("")
    this.myForm.controls['message'].setValue("")
    this.myForm.controls['subj'].setValue("")
  }

}
