import {Bet} from './bet.model';
import {Game} from './game.model';
import {Team} from './team.model';


export class Matches {
  constructor(
    public id: number,
    public game: Game,
    public dateMatch: any,
    public winner: Team,
    public idApiExt: number,
    public teamsParticipating: Team[],
    public listBet?: Bet[]
  ) {}
}
