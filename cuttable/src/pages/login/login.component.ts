import {Component} from '@angular/core';
import {LoginService} from '../../providers/login-service'
import {Facebook} from 'ionic-native';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [LoginService]
})
export class LoginPage {
  email: String;
  password: String;

  constructor(public loginService: LoginService) {
    this.checkIfLoggedIn();
  }

  checkIfLoggedIn() {
    if (this.isLoggedInWithFacebook()) {

    }
  }

  isLoggedInWithFacebook() {
    return Facebook.getLoginStatus()
      .then((response) => response.status === 'connected');
  }

  register() {
    if (!this.email || !this.password) {
      return;
    }
    this.loginService.register(this.email, this.password)
      .subscribe(
        () => alert('Register successful'),
        (error) => alert(`Register error: ${error}`)
      );
  }

  login() {
    if (!this.email || !this.password) {
      return;
    }
    this.loginService.login(this.email, this.password)
      .subscribe(
        () => alert('Login successful'),
        (error) => alert(`Login error: ${error}`)
      );
  }

  facebookLogin() {
    Facebook.login(['public_profile'])
      .then(
        (response) => {
          if (response.status === 'connected') {
            alert(response.authResponse.userID);
          }
        }
      );
  }
}