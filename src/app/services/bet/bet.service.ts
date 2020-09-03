import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BetService {
  private baseUrl = 'http://localhost:8080/api/';
  newDataAdded = new EventEmitter<string>();

  constructor(private http: HttpClient) {
  }

  createBet(datas: any): Observable<any> {
    let result: Observable<any>;
    result = this.http.post(this.baseUrl + 'bet/new', datas);
    return result;
  }

  getAllBets(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + 'bet/all?page=0');
  }
}
