import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private http: HttpClient) { }

  // CRUD
  getAllCards(){
    return this.http.get('https://api.pokemontcg.io/v1/cards?name=charizard')
  }

}
