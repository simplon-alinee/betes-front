import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Game} from '../../models/game.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private baseUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) {
  }

  public getGames(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + 'game/all');
  }
}
