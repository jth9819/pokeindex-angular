import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';
import { TeamService } from 'src/app/services/team.service';
import { UserService } from 'src/app/services/user.service';
import { ListService } from '../list.service';

@Component({
  selector: 'app-list-figure',
  templateUrl: './list-figure.component.html',
  styleUrls: ['./list-figure.component.css']
})
export class ListFigureComponent implements OnInit {
  pokemon: any[] = []; // Array of Pokemon
  totalPokemon: number; // Total # of Pokemon
  page = 1; // Page
  offset: number; // Offset for new Pokemon when switching pages
  limitItemsOnPage = 12; // # of Pokemon to be shown on a page
  private userSubscription: Subscription;
  private teamSubscription: Subscription;

  // Constructor that instantiates ListService and HttpClient
  constructor(private listService: ListService, private http: HttpClient, private userService: UserService, private teamService: TeamService, private afs: AngularFirestore) { }

  ngOnInit(): void {
    // Call getPokemon() on initialization
    this.getPokemon();
    this.userSubscription = this.userService.user$.subscribe();
  }

  // getPokemon() function that gets the Pokemon from the API and stores/sorts them.
  getPokemon(): void {
    this.offset = (this.page * this.limitItemsOnPage) - this.limitItemsOnPage; // Set the offset
    this.listService.getPokemon(this.limitItemsOnPage, this.offset) // call getPokemon() from the ListService
      .subscribe((response: any) => {
        this.totalPokemon = response.count; // Set totalPokemon to count found in response
        response.results.forEach(result => {
          this.http.get(result.url) // Access HttpClient and get url 
            .subscribe((uniqueResponse: any) => {
              this.pokemon.push(uniqueResponse); // Push to Pokemon array
              this.pokemon.sort((a, b) => a.id > b.id ? 1 : -1);
            });
        });
        console.log(this.pokemon);
      })
  }

  ngOnDestroy() {
    // Clean up the subscription if this template is destroyed
    this.userSubscription.unsubscribe();
  }
}