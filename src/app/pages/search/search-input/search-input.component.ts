import { Component, Input, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {
  pokemon: any; // Holds information about queried pokemon
  public show: boolean = false; // Controls the visibility of hidden search results card

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  /**
   * Retrieves pokemon data from API
   * @param name 
   */
  getSearchedPokemon(name: String): void {
    this.searchService.getSearchedPokemon(name)
      .subscribe((response: any) => {
        this.pokemon = response;
      })
  }

  /**
   * Toggles the visibility of the hidden card container that displays search results
   */
  toggleShow() {
    this.show = !this.show;
  }
}
