import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Team } from '../models/team';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  team$: any;

  constructor(private afs: AngularFirestore) { }

  /**
   * Takes in a username and returns an observable stream for that user's team
   * @param uid The username of the person
   * @returns An observable of a team array
   */
  public getTeamByUid(uid: string): Observable<Team[]> {
    return this.afs
      .collection('teams', ref => ref.where('user.uid', '==', uid).orderBy('time', 'desc'))
      .valueChanges().pipe(
        map( team => team.map( teamObj => new Team(teamObj) ))
      );
  }

  /** Gets all teams in the system */
  public getAllTeams(): Observable<Team[]> {
    return this.afs
      .collection('teams', ref => ref.orderBy('time', 'desc'))
      .valueChanges().pipe(
        map( teams => teams.map( teamObj => new Team(teamObj) ))
      );
  }

  /**
   * Posts a new team to the database
   * @param team The team object we want to save
   */
  public postTeam(team: Team): void {
    this.afs.collection('teams').add({ // Break down the team to a JS object to save
      user:  team.user,
      pokemon: team.pokemon
    });
  }
}
