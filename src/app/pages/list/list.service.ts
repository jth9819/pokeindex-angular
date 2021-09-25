import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  // Constructor that instantiates HttpClient
  constructor(private http: HttpClient) { }

  // Get Pokemon from the API passing in the limit and offset
  public getPokemon(limit: number, offset: number) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  }

  // Get more Pokemon data from the API passing in the name
  public getMoreData(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
}