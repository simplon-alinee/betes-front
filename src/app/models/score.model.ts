import {User} from './user.model';

export class Score {
  constructor(
    public id: number,
    public score: number,
    public user: User,
    public dateUpdate: any,
  ) {}
}
