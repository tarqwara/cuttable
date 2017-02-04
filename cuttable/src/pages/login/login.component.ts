import { Component } from '@angular/core';
import { AccountService } from '../../providers/account-service'
import { Facebook } from 'ionic-native';
import { ToastController, NavController } from 'ionic-angular';
import { HomePage } from '../home/home.component';

@Component({
  selector: 'login-page',
  templateUrl: 'login.html',
  providers: [AccountService]
})
export class LoginPage {
  email: string;
  password: string;

  constructor(public accountService: AccountService, public toastCtrl: ToastController, public navCtrl: NavController) {
  }

  //noinspection JSMethodCanBeStatic
  isLoggedInWithFacebook() {
    return Facebook.getLoginStatus()
      .then(response => response.status === 'connected');
  }

  register() {
    if (!this.email || !this.password) {
      return;
    }
    this.accountService.createAccount(this.email, this.password)
      .subscribe(
        () => this.redirectToHomePage(),
        response => this.showToast(response.json().message)
      );
  }

  login() {
    if (!this.email || !this.password) {
      return;
    }
    this.accountService.checkAccountCredentials(this.email, this.password)
      .subscribe(
        () => this.redirectToHomePage(),
        response => this.showToast(response.json().message)
      );
  }

  facebookLogin() {
    Facebook.login(['public_profile'])
      .then(response => {
        if (response.status === 'connected') {
          this.redirectToHomePage();
        }
      });
  }

  redirectToHomePage() {
    this.navCtrl.push(HomePage);
  }

  showToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }
}
