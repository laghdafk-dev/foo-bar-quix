import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Result } from './model/result';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FooBarQuixService {

  URL = '/foo-bar-quix';

  constructor(private http: HttpClient, @Inject("SERVER_URL") private serverUrl: string) { }
  
  getResponse(inputNumber: number): Observable<string> {
    return this.http.get<Result>(this.serverUrl + this.URL + "/" + inputNumber).pipe<string>(
      map((result: Result) => result.result));
  }

}
