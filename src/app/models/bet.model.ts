import {User} from './user.model';
import {Matches} from './matches.model';
import {Team} from './team.model';

export class Bet {
  constructor(
    public id: number,
    public user: User,
    public matches: Matches,
    public betOnTeam: Team,
    public dateBet: any,
    public resultBet: boolean,
    public dateUpdate: any,
  ) {}
}
