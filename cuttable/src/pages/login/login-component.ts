import {Component} from '@angular/core';
import {LoginService} from '../../providers/login-service'

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [LoginService]
})
export class LoginPage {
  email: String;
  password: String;

  constructor(public loginService: LoginService) {
  }

  register() {
    if (!this.email || !this.password) {
      return;
    }
    this.loginService.register(this.email, this.password)
      .subscribe(
        () => alert("Register successful"),
        () => alert("Register error")
      );
  }

  login() {
    if (!this.email || !this.password) {
      return;
    }
    this.loginService.login(this.email, this.password)
      .subscribe(
        () => alert("Login successful"),
        () => alert("Login error")
      );
  }
}
