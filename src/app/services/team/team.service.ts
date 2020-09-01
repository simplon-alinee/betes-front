import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private baseUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) {
  }

  public getTeams(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + 'team/all');
  }

  public getTeamById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}` + 'team/' + id);
  }
}
