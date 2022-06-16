import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartService } from 'src/app/cart.service';
import { CardCV } from 'src/app/models/card';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor(
    private cs: CartService,
    private cas: CardService
  ) { }

  total = this.cs.getTotal();

  myForm : FormGroup = new FormGroup({
             
    "holder": new FormControl(),
    "cardNum": new FormControl(),
    "date": new FormControl(),
    "cvv": new FormControl(),
    "code": new FormControl()
  });

  card = new CardCV

  addCard() {
    if(this.myForm.controls["cvv"].value.length < 3
  || this.myForm.controls["cardNum"].value.length < 19
  || this.myForm.controls["date"].value.length < 5) {
    this.myForm.controls["holder"].setValue("NOT VALID CARD DATA")
  } else {
    this.card = new CardCV
    this.card.number = this.myForm.controls["cardNum"].value
    this.card.date = this.myForm.controls["date"].value
    this.card.cvv = this.myForm.controls["cvv"].value
    this.card.sum = this.total
    this.cas.createCard(this.card).subscribe(res => {
      this.AddCard();
    })
  }
  this.AddCard();
  }

  updateCard() {
    if(this.myForm.controls["code"].value.length < 3) {
      this.myForm.controls["code"].setValue("ENTER THE CODE")
    }
    else {
      this.card.code = this.myForm.controls["code"].value
      this.cas.addCode(this.card.number, this.card.code).subscribe(res => {
        this.Verify();
      })
    }
  }

  days: any;
  hours: any;
  minutes: any = 0;
  seconds: any = 0;
  myInterval: any;
  verify =  false;

  spinny = 0;

  ngOnInit(): void {
    this.myForm.controls["cardNum"].valueChanges.subscribe(res => {
      if(res.length == 4 ||
      res.length == 9 ||
      res.length == 14){
        this.myForm.controls["cardNum"].setValue(res + " ")
      }
    })
    this.myForm.controls["date"].valueChanges.subscribe(res => {
      if(res.length == 2){
        this.myForm.controls["date"].setValue(res + "/")
      }
    })
  }

  StartSpinner() {
    var CurrentTime = new Date();
    CurrentTime.setSeconds(CurrentTime.getSeconds() + 6);
    let myInterval = setInterval(() => {
      const endTimeParse = (Date.parse(CurrentTime.toString()) / 1000);
      const now = new Date();
      const nowParse = (Date.parse(now.toString()) / 1000);
      const timeLeft = endTimeParse - nowParse;
      const days = Math.floor(timeLeft / 86400);
      let hours = Math.floor((timeLeft - (days * 86400)) / 3600);
      let minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
      let seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
      if (hours < 10) { hours = 0 + hours; }
      if (minutes < 10) { minutes = 0 + minutes; }
      if (seconds < 10) { seconds = 0 + seconds; }
      this.spinny = seconds
  }, 0);
  setTimeout(() => { clearInterval(myInterval); }, 6000);
  }

  AddCard() {
    this.verify = true;
    this.StartSpinner();
    if(this.minutes == 0 && this. seconds == 0){
      this.startTimer()
    }
  }
  isverified = false

  Verify() {
    this.isverified = true;
    this.StartSpinner();
  }

  NewTimer() {
    this.verify = true;
    this.startTimer()
  }

  startTimer(){
    var CurrentTime = new Date();
    CurrentTime.setMinutes(CurrentTime.getMinutes() + 5);
    this.myInterval = setInterval(() => {
      this.commingSoonTime(CurrentTime);
  }, 0);
  setTimeout(() => { clearInterval(this.myInterval); }, 300000);
  }

  get isTimerOut() {
    if(this.minutes == 0 && this. seconds == 0){
      return true
    }
    if(this.minutes == 0 && this. seconds == 1){
      return true
    }
    return false
  }


  commingSoonTime = (date: Date) => {
    const endTimeParse = (Date.parse(date.toString()) / 1000);
    const now = new Date();
    const nowParse = (Date.parse(now.toString()) / 1000);
    const timeLeft = endTimeParse - nowParse;
    const days = Math.floor(timeLeft / 86400);
    let hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    let minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
    let seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
    if (hours < 10) { hours = 0 + hours; }
    if (minutes < 10) { minutes = 0 + minutes; }
    if (seconds < 10) { seconds = 0 + seconds; }
    this.days = days;
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
  }
  
}

