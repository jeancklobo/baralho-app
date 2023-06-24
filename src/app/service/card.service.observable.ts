import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Card } from "../model/card";


@Injectable({
  providedIn: 'root',
})
export class CardServiceObservable{
  URL = 'http://localhost:3000/cards';

  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}),};

  constructor(private httpClient: HttpClient){}

  getAll(): Observable<Card[]>{
    return this.httpClient.get<Card[]>(this.URL);
  }

  getByDeckId(deckId: number): Observable<Card[]>{
    const params: HttpParams = new HttpParams().set('deckId', deckId);

    const options = deckId ? { params: params} : {};

    return this.httpClient.get<Card[]>(this.URL, options);
  }

  save(card: Card): Observable<Card>{
    return this.httpClient.post<Card>(this.URL, JSON.stringify(card), this.httpOptions);
  }

  patch(card: Card): Observable<Card>{
    return this.httpClient.patch<Card>(`${this.URL}/${card.id}`, JSON.stringify(card), this.httpOptions);
  }

  update(card: Card): Observable<Card>{
    return this.httpClient.put<Card>(`${this.URL}/${card.id}`, JSON.stringify(card), this.httpOptions);
  }

  delete(card: Card): Observable<Card>{
    return this.httpClient.delete<Card>(`${this.URL}/${card.id}`);
  }
}
