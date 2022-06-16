import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CardCV } from 'src/app/models/card';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-my-account-page',
  templateUrl: './my-account-page.component.html',
  styleUrls: ['./my-account-page.component.scss']
})
export class MyAccountPageComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private cas: CardService,
    private router: Router
  ) { }

  cards = new Array<CardCV>()

  getCards() {
    if(this.isAdmin) {
      this.cas.getAllCards().subscribe(res => {
      this.cards = res
      this.cards = this.cards.sort(function(a,b): any{
        return Date.parse(b.updatedAt) - Date.parse(a.updatedAt);
      })
    })}
  }

  ngOnInit(): void {
    this.getCards()
  }

  delete(id: number){
    this.cas.deleteCard(id).subscribe(() => {
      this.getCards()
    })
  }

  
  loginForm : FormGroup = new FormGroup({
    "email": new FormControl(),
    "password": new FormControl()
  });

  SignIn() {
    let email = this.loginForm.controls["email"].value
    let password = this.loginForm.controls["password"].value
    //console.log(email, password)
    this.auth.login(email, password).subscribe(res => {
      //console.log(res)
      let currentUrl = this.router.url;
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
      });
      //this.router.navigate(['/profile']);
    })
  }

  regForm : FormGroup = new FormGroup({
    "firstn": new FormControl(),
    "lastn": new FormControl(),
    "email": new FormControl(),
    "tel": new FormControl(),
    "password": new FormControl()
  });

  SignUp() {
    let user = new User;
    user.firstn = this.regForm.controls["firstn"].value
    user.lastn = this.regForm.controls["lastn"].value
    user.email = this.regForm.controls["email"].value
    user.phone = this.regForm.controls["tel"].value
    user.password = this.regForm.controls["password"].value
    //console.log(user)
    this.auth.register(user).subscribe(res => {
      //console.log(res)
      let currentUrl = this.router.url;
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
      });
      //this.router.navigate(['/profile']);

    })
  }

  err = new Error

  UpdateUser() {
    let user = new User;
    user.firstn = this.regForm.controls["firstn"].value
    user.lastn = this.regForm.controls["lastn"].value
    user.email = this.regForm.controls["email"].value
    user.phone = this.regForm.controls["tel"].value
    user.password = this.regForm.controls["password"].value
    //console.log(user)
    this.auth.updateUser(user).subscribe(res => {

      let currentUrl = this.router.url;
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);

      });
      //this.router.navigate(['/profile']);

    }, err => this.err = err)
  }

  public get isLoggedIn() {
    return this.auth.isAuthenticated()  
  }

  logout(){
    this.auth.logout();
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
  }

  get isAdmin(){
    return this.auth.isAdmin
  }

  get isUser(){
    return this.auth.isUser
  }

}
