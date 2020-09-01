import {Bet} from './bet.model';
import {Team} from './team.model';
import {Matches} from './matches.model';

export class Game {
  constructor(
    public id: number,
    public name: string,
    public nameApiExt: string,
    public logo: string,
    public idApiExt: number,
    public matchEntityList: Matches[],
    public teamList: Team[]
  ) {
  }
}
