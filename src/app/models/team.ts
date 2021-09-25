// Team model (unused)
export class Team {
    public user: object;
    public pokemon: any; 

    constructor(teamObj) {
        this.user = teamObj.user;
        this.pokemon = teamObj.pokemon;
    }
}