import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }
  
  /**
   * Makes the call to the API with the provided search query
   * @param searchQuery 
   * @returns 
   */
  public getSearchedPokemon(searchQuery: String) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${searchQuery.toLowerCase()}`);
  }
}