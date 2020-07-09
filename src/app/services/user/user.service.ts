import { Injectable } from '@angular/core';
import {User} from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user = new User(1, 'CHEVALIER',
    'a.elwert@hotmail.fr', 'azerty', 'aa', 'azerty', 'admin', 'aaa', true, null);

  constructor() { }

  /**
   * Method for update the user
   * @param updatedUser The new vals of the user
   */
  updateUser(updatedUser: User) {
    this.user = updatedUser;
  }
}
