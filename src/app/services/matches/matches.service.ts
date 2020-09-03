import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Matches} from '../../models/matches.model';
import {Game} from '../../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {

  matches: Matches[] = [];

  private baseUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) {

  }

  getAllMatches(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + 'matches/all?page=0');
  }
  getAllMatchesByGame(gameId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}` + 'matches/all/' + gameId + '?page=0');
  }

  public getMatchById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}` + 'matches/' + id);
  }

  updateMatch(datas: any): Observable<any> {
    let result: Observable<any>;
    result = this.http.put(this.baseUrl + '/matches/update', datas);
    return result;
  }


}
