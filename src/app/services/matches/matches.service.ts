import {Injectable} from '@angular/core';
import {Match} from '../../models/equipe.model';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {

  matches: Array<any>;

  constructor() {

    this.matches = [
      new Match(0, 'LEAGUE OF LEGENDS', '05/03/2020 - 12:16', 'IN PROGRESS', '--------'),
      new Match(1, 'HOTS', '10/07/2020 - 12:16', 'FINISH', 'TEAM PATATE')
    ];

  }

  /**
   * Method for switch the status of all the products
   * @param newStatus The new status to set
   */
  switchProductsStatus(newStatus: string) {
    this.matches.map((product) => {
      product.status = newStatus;
    });
  }

  /**
   * Method for switch the status of one products
   * @param i The index of the product to update
   * @param newStatus The new status to set
   */
  switchProductStatus(i: number, newStatus: string) {
    this.matches[i].status = newStatus;
  }

  /**
   * Method for search an element in the array by his id
   * @param id The id of the product searched
   */
  getElementById(id: number) {
    const match = this.matches.find(
      (s) => {
        return s.id === id;
      }
    );
    return match;
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

    const newMatch = new Match(id, name, date, status, result);
    this.matches.push(newMatch);
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
   * Method for edit an existing product from the array
   * @param id The id of the product
   * @param name The name of the product
   * @param description The description of the product
   * @param status The status of the product
   */
  editMatch(id: number, name: string, date: string, status: string, result: string) {

    const cb = (i) => {
      this.matches[i].name = name;
      this.matches[i].date = date;
      this.matches[i].result = result;
      this.matches[i].status = status;
      return;
    };

    this._loopMatches('id', id, cb);

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
