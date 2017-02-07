import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Account } from '../models/account';
import { Config } from '../config/config';

const REGISTER_ENDPOINT = '/accounts/register';
const LOGIN_ENDPOINT = '/login';

@Injectable()
export class AccountService {

  constructor(public http: Http) { }

  createHeaders(): Headers {
    return new Headers({
      'Content-Type': 'application/json'
    });
  }

  register(account: Account): Observable<Response> {
    return this.http.post(Config.API_URL + REGISTER_ENDPOINT, account, {
      headers: this.createHeaders()
    });
  }

  login(account: Account): Observable<Response> {
    return this.http.post(Config.API_URL + LOGIN_ENDPOINT, account, {
      headers: this.createHeaders()
    });
  }

}
