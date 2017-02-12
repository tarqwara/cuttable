import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { NavController, App } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';
import { Account } from '../models/account';
import { Config } from '../config/config';
import { LoginPage } from '../pages/login/login.component';
import { TokenService } from './token-service';

const REGISTER_ENDPOINT = '/accounts/register';
const LOGIN_ENDPOINT = '/login';

@Injectable()
export class AccountService {

  constructor(private http: Http, private tokenService: TokenService, private navCtrl: NavController,
    private app: App) { }

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

  logout(): void {
    this.tokenService.removeJWTToken().subscribe(
      () => {
        this.app.getRootNav().setRoot(LoginPage);
      }
    );
  }

}
