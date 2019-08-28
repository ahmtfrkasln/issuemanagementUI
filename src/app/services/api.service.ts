import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiPath = environment.API_PATH;
  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

  constructor(private http: HttpClient) {
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(this.apiPath + path, {params}).pipe(
      catchError(this.formatError)
    );
  }

  post(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    console.log(params);
    return this.http.post(this.apiPath + path, JSON.stringify(params), this.httpOptions).pipe(
      catchError(this.formatError)
    );
  }

  put(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.put(this.apiPath + path, JSON.stringify(params), this.httpOptions).pipe(
      catchError(this.formatError)
    );
  }

  delete(path: string, params: HttpParams = new HttpParams()): Observable<boolean> {
    return this.http.delete<boolean>(this.apiPath + path, {params}).pipe(
      catchError(this.formatError)
    );
  }

  formatError(error: any) {
    console.log('Error!!!');
    return of(error.error);
  }
}
