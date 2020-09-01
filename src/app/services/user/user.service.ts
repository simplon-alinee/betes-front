import {Injectable} from '@angular/core';
import {User} from '../../models/user.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user = new User(1, 'ADMIN',
    'a.elwert@hotmail.fr', 'azerty', 'aa', 'azerty', 'admin', 'aaa', true, null);
  private userUrl = '/api/user';

  constructor(private http: HttpClient) {
  }

  /**
   * Method for update the user
   * @param updatedUser The new vals of the user
   */
  updateUser(updatedUser: User) {
    this.user = updatedUser;
  }

  public getUsers() {
    return this.http.get<User[]>(this.userUrl);
  }
}
