import {Injectable} from '@angular/core';
import {ApiService} from '../api.service';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class UserService {

  private USER_PATH = '/user';

  constructor(private apiService: ApiService) {
  }

  getAll(): Observable<any> {
    return this.apiService.get(this.USER_PATH + '/all').pipe(
      map(res => {
        if (res) {
          return res;
        } else {
          console.log('Error!!! >>> userService.getAll()');
          console.log(res);
          return of({});
        }
      })
    );
  }

  getById(id): Observable<any> {
    return this.apiService.get(this.USER_PATH, id).pipe(
      map(res => {
        if (res) {
          return res;
        } else {
          console.log(res);
          return of({});
        }
      })
    );
  }

  createUser(user): Observable<any> {
    return this.apiService.post(this.USER_PATH, user).pipe(
      map(res => {
        if (res) {
          return res;
        } else {
          console.log(res);
          return of({});
        }
      })
    );
  }

  delete(id): Observable<boolean> {
    return this.apiService.delete(this.USER_PATH + '/' + id).pipe();
  }
}
