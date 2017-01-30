import {Injectable} from '@angular/core';
import {HttpService} from './http-service';
import 'rxjs/add/operator/map';

const ACCOUNTS_ENDPOINT = '/accounts';

@Injectable()
export class AccountService {

  constructor(public httpService: HttpService) {
  }

  checkAccountCredentials(email: string, password: string) {
    return this.httpService.get(ACCOUNTS_ENDPOINT, {
      email: email,
      password: password
    });
  }

  createAccount(email: string, password: string) {
    return this.httpService.post(ACCOUNTS_ENDPOINT, {
      email: email,
      password: password
    });
  }

}
