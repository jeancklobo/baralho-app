import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { lastValueFrom} from 'rxjs';
import { Deck } from "../model/deck";

@Injectable({
  providedIn: 'root',
})
export class DeckServicePromice{
  URL = 'http://localhost:3000/decks';

  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}),};

  constructor(private httpClient: HttpClient){}


  getAll(): Promise<Deck[]>{
    //return this.httpClient.get<Deck[]>(this.URL).toPromise();
    return lastValueFrom(this.httpClient.get<Deck[]>(this.URL));
  }

  getById(id: number): Promise<Deck[]>{
    return lastValueFrom(this.httpClient.get<Deck[]>(`${this.URL}/${id}`));
  }
  save(deck: Deck): Promise<Deck>{
    return lastValueFrom(this.httpClient.post<Deck>(this.URL, JSON.stringify(deck), this.httpOptions));
  }

  patch(deck: Deck): Promise<Deck>{
    return lastValueFrom(this.httpClient.patch<Deck>(`${this.URL}/${deck.id}`, JSON.stringify(deck), this.httpOptions));
  }

  update(deck: Deck): Promise<Deck>{
    return lastValueFrom(this.httpClient.put<Deck>(`${this.URL}/${deck.id}`, JSON.stringify(deck), this.httpOptions));
  }

  delete(deck: Deck): Promise<Deck>{
    return lastValueFrom(this.httpClient.delete<Deck>(`${this.URL}/${deck.id}`));
  }
}
