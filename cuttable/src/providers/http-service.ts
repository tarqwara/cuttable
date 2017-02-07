import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Config } from '../config/config';
import { Observable } from 'rxjs/Rx';
import { TokenService } from './token-service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class HttpService {

  constructor(public http: Http, public tokenService: TokenService) {
  }

  createHeaders(): Observable<Headers> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.tokenService.getJWTToken().map(
      token => {
        if (token) {
          headers.append('Authorization', token);
        }
        return headers;
      }
    );
  }

  post(endpoint: string, body: Object): Observable<Response> {
    return this.createHeaders().flatMap(headers => {
      return this.http.post(Config.API_URL + endpoint, body, {
        headers: headers
      });
    });
  }

}
