import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { lastValueFrom } from "rxjs";
import { Card } from "../model/card";

@Injectable({
  providedIn: 'root',
})
export class CardServicePromice{
  URL = 'http://localhost:3000/cards';

  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}),};

  constructor(private httpClient: HttpClient){}

  getAll(): Promise<Card[]>{
    //return this.httpClient.get<Deck[]>(this.URL).toPromise();
    return lastValueFrom(this.httpClient.get<Card[]>(this.URL));
  }

  save(card: Card): Promise<Card>{
    return lastValueFrom(this.httpClient.post<Card>(this.URL, JSON.stringify(card), this.httpOptions));
  }

  patch(card: Card): Promise<Card>{
    return lastValueFrom(this.httpClient.patch<Card>(this.URL, JSON.stringify(card), this.httpOptions));
  }

  update(card: Card): Promise<Card>{
    return lastValueFrom(this.httpClient.put<Card>(this.URL, JSON.stringify(card), this.httpOptions));
  }
}
