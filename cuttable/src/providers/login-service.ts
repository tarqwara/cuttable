import {Injectable} from '@angular/core';
import {HttpService} from './http-service';
import 'rxjs/add/operator/map';

const REGISTER_URL = '/user/register';
const LOGIN_URL = '/user/login';

@Injectable()
export class LoginService {

  constructor(public httpService: HttpService) {
  }

  register(email: String, password: String) {
    return this.httpService.post(REGISTER_URL, {
      email: email,
      password: password
    });
  }

  login(email: String, password: String) {
    return this.httpService.post(LOGIN_URL, {
      email: email,
      password: password
    });
  }

}
