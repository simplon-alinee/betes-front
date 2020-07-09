import {Bet} from './bet.model';

export class User {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public username: string,
    public birthDate: any,
    public password: string,
    public role: string,
    public inscriptionDate: any,
    public validationInscription: boolean,
    public listBet: Bet[]
  ) {}
}
