import {Injectable} from '@angular/core';
import {ApiService} from '../api.service';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class IssueHistoryService {

  private HISTORY_PATH = '/issue-history';

  constructor(private apiService: ApiService) {
  }

  getAll(page): Observable<any> {
    return this.apiService.get(this.HISTORY_PATH + '/pagination', page).pipe(
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
    return this.apiService.get(this.HISTORY_PATH, id).pipe(
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

  createIssueHistory(issueHistory): Observable<any> {
    return this.apiService.post(this.HISTORY_PATH, issueHistory).pipe(
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
    return this.apiService.delete(this.HISTORY_PATH + '/' + id).pipe();
  }
}
