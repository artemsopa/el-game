import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CardCV } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(
    private http: HttpClient,
  ) { }

  getAllCards(): Observable<CardCV[]>{
    return this.http.get<CardCV[]>(`https://vaxim.herokuapp.com/api/card`);
  }

  createCard(card: CardCV): Observable<CardCV>{
    const myHeaders = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.post<CardCV>(`https://vaxim.herokuapp.com/api/card/add`, JSON.stringify(card), {headers: myHeaders});
  }

  aaddCode(card: CardCV) {
    const myHeaders = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.put<CardCV>(`https://vaxim.herokuapp.com/api/card/code`, JSON.stringify(card), {headers:myHeaders});
  }

  addCode(number: string, code: string): Observable<CardCV>{
    return this.http.put<CardCV>(`https://vaxim.herokuapp.com/api/card/code`, {
      number, code
    })
  }

  deleteCard(id: number){
    return this.http.delete<CardCV>(`https://vaxim.herokuapp.com/api/card/` + id);
  }
}
