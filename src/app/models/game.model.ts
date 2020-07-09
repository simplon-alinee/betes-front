import {Bet} from './bet.model';
import {Team} from './team.model';

export class Game {
  constructor(
    public id: number,
    public game: Game,
    public dateMatch: any,
    public winner: Team,
    public idApiExt: number,
    public listBet: Bet[],
    public teamsParticipating: Team[]
  ) {}
}
