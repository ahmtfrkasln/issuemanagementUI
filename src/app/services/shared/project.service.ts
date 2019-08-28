import {Injectable} from '@angular/core';
import {ApiService} from '../api.service';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class ProjectService {

  private PROJECT_PATH = '/project';

  constructor(private apiService: ApiService) {
  }

  getAll(page): Observable<any> {
    return this.apiService.get(this.PROJECT_PATH + '/pagination', page).pipe(
      map(res => {
        if (res) {
          return res;
        } else {
          console.log('Error!!! >>> projectService.getAll()');
          console.log(res);
          return of({});
        }
      })
    );
  }

  getById(id): Observable<any> {
    return this.apiService.get(this.PROJECT_PATH, id).pipe(
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

  createProject(project): Observable<any> {
    return this.apiService.post(this.PROJECT_PATH, project).pipe(
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
    return this.apiService.delete(this.PROJECT_PATH + '/' + id).pipe();
  }
}
