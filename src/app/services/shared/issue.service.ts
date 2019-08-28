import { Injectable } from '@angular/core';
import {ApiService} from '../api.service';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpHeaders} from '@angular/common/http';

@Injectable()
export class IssueService {

  private ISSUE_PATH = '/issue';

  constructor(private apiService: ApiService) {
  }

  getAll(): Observable<any> {
    return this.apiService.get(this.ISSUE_PATH).pipe(
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

  getById(id): Observable<any> {
    return this.apiService.get(this.ISSUE_PATH, id).pipe(
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

  createIssue(issue): Observable<any> {
    return this.apiService.post(this.ISSUE_PATH, issue).pipe(
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

  delete(id): Observable<any> {
    return this.apiService.delete(this.ISSUE_PATH, id).pipe(
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
}
