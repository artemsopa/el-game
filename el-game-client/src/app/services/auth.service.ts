import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { API_URL } from '../app-injection-token';
import { Token } from '../models/token';
import { User } from '../models/user';

export const ACCES_TOKEN_KEY = 'elgame_access_token'
export const USER_ROLE = 'user_role'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    @Inject(API_URL) private apiUrl: string,
    private jwtHelper: JwtHelperService,
    private router: Router
  ) { }

  get isCheckout() {
    if(this.router.url.toString() == "/checkout"){
      return true
    }
    return false
  }

  updateUser(user: User) {
    const myHeaders = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.put<User>(`https://vaxim.herokuapp.com/api/user/info`, JSON.stringify(user), {headers:myHeaders});
  }

  register(user: User): Observable<User>{
    const myHeaders = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.post<User>(`https://vaxim.herokuapp.com/api/user/reg`, JSON.stringify(user), {headers: myHeaders});
  }

  login(email: string, password: string): Observable<Token>{
    return this.http.post<Token>(`https://vaxim.herokuapp.com/api/user/login`, {
      email, password
    }).pipe(
      tap(token => {
        localStorage.setItem(ACCES_TOKEN_KEY, token.token);
        localStorage.setItem(USER_ROLE, token.userRole);
      })
    )
  }

  isAuthenticated(){
    if (localStorage.getItem(ACCES_TOKEN_KEY) == null) {
      return false
    }
    return true
  }

  public get isUser(){
    if(localStorage.getItem(USER_ROLE) == "USER"){
      return true;
    }else{
      return false;
    }
  }

  public get isAdmin(){
    if(localStorage.getItem(USER_ROLE) == "ADMIN"){
      return true;
    }else{
      return false;
    }
  }

  logout(): void{
    localStorage.removeItem(ACCES_TOKEN_KEY);
    this.router.navigate(['profile']);
  }

  tokenGetter() {
    return localStorage.getItem(ACCES_TOKEN_KEY);
  }
}

