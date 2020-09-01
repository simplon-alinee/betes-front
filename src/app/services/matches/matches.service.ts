import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Matches} from '../../models/matches.model';

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

  public getMatchById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}` + 'matches/' + id);
  }

  /**
   * Method for switch the status of one products
   * @param i The index of the product to update
   * @param newStatus The new status to set
   */
  switchProductStatus(i: number, newStatus: string) {
   // this.matches[i].status = newStatus;
  }

  /**
   * Method for search an element in the array by his id
   * @param id The id of the product searched
   */
  getElementById(id: number) {

  }

  /**
   * Method for add a new product
   * @param name The name of the product
   * @param description The description of the product
   * @param status The status of the product
   */
  addMatch(name: string, date: string, status: string, result: string) {
    // Necessary, if we delete all the products, the add product throw an error because the array length is null
    let id = 0;
    if (this.matches.length > 0) {
      id = this.matches[this.matches.length - 1].id + 1;
    }

 //   const newMatch = new Matches(id, name, date, status, result);
  //  this.matches.push(newMatch);
  }

  /**
   * Generic method for loop through each product
   * @param attrComp The attr search to compare
   * @param valComp The val to compare
   * @param cb The callback to call when the condition is true
   */
  _loopMatches(attrComp, valComp, cb) {

    for (let i = 0; i < this.matches.length; i++) {
      if (this.matches[i][attrComp] === valComp) {
        cb(i);
      }
    }

  }



  /**
   * Method for delete a product by his id
   * @param id The id of the product to delete
   */
  deleteProduct(id: number) {

    const cb = (i) => {
      return this.matches.splice(i, 1);
    };

    this._loopMatches('id', id, cb);

  }
}
