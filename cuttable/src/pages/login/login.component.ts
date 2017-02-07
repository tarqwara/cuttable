import { Component } from '@angular/core';
import { ToastController, NavController, LoadingController, Loading } from 'ionic-angular';
import { AccountService } from '../../providers/account-service'
import { TokenService } from '../../providers/token-service';
import { HomePage } from '../home/home.component';
import { Account } from '../../models/account';

@Component({
  selector: 'login-page',
  templateUrl: 'login.html',
  providers: [AccountService]
})
export class LoginPage {
  account: Account;

  constructor(public accountService: AccountService, public toastCtrl: ToastController, public navCtrl: NavController,
    public loadingCtrl: LoadingController, public tokenService: TokenService) {
    this.redirectToHomePageIfLoggedIn();
    this.account = new Account();
  }

  redirectToHomePageIfLoggedIn(): void {
    this.tokenService.getJWTToken().subscribe(
      token => {
        if (token) {
          this.redirectToHomePage()
        }
      }
    );
  }

  redirectToHomePage(): void {
    this.navCtrl.push(HomePage);
  }

  createLoader(): Loading {
    return this.loadingCtrl.create({
      dismissOnPageChange: true
    });
  }

  showToast(message: string): void {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

  handleLogin(loader: Loading): void {
    this.accountService.login(this.account).subscribe(
      response => {
        this.tokenService.saveJWTTokenToStorage(response).subscribe(
          () => this.redirectToHomePage(),
          e => {
            console.log(e);
            loader.dismiss();
            this.showToast('Something went wrong');
          }
        );
      },
      response => {
        loader.dismiss();
        if (response.status === 401) {
          this.showToast('Wrong username or password');
        }
      }
    );
  }

  register(): void {
    if (!this.account.email || !this.account.password) {
      return;
    }
    let loader = this.createLoader();
    loader.present();
    this.accountService.register(this.account).subscribe(
      () => this.handleLogin(loader),
      response => {
        loader.dismiss();
        this.showToast(response.json().message);
      }
    );
  }

  login(): void {
    if (!this.account.email || !this.account.password) {
      return;
    }
    let loader = this.createLoader();
    loader.present();
    this.handleLogin(loader);
  }

}
