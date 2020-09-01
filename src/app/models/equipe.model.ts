/*
export class Equipe {
  constructor(
    public idEquipe: number,
    public idJeux: number,
    public nomEquipe: string,
    public logo: string,
    public idEquipeApi: string,
  ) {}
}
*/
export class Match {
  constructor(
    public id: number,
    public name: string,
    public date: string,
    public status: string,
    public result: string,
  ) {}
}
