import {User} from './user.model';
import {Matches} from './matches.model';
import {Game} from './game.model';

export class Team {
  constructor(
    public id: number,
    public game: Game,
    public teamName: string,
    public logo: string,
    public idApiExt: number,
    public matchesList: Matches[]
  ) {}
}
