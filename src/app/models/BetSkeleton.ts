import {User} from './user.model';
import {Matches} from './matches.model';
import {Team} from './team.model';

export class Bet {
  constructor(
    public userId: number,
    public matchId: number,
    public betOnTeamId: number
  ) {}
}
