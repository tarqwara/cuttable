import { Component } from '@angular/core';
import { ToastController, NavController, LoadingController, Loading } from 'ionic-angular';
import { AuthService } from '../../providers/auth.service'
import { TokenService } from '../../providers/token.service';
import { TabsPage } from '../tabs/tabs.component';
import { Account } from '../../models/account';

@Component({
  selector: 'login-page',
  templateUrl: 'login.html',
  providers: [AuthService]
})
export class LoginPage {
  account: Account;
  loader: Loading;

  constructor(private authService: AuthService, private toastCtrl: ToastController,
    private navCtrl: NavController, private loadingCtrl: LoadingController, private tokenService: TokenService) {
    this.redirectToTabsPageIfLoggedIn();
    this.account = new Account();
  }

  redirectToTabsPageIfLoggedIn(): void {
    this.tokenService.getJWTToken().subscribe(
      token => {
        if (token) {
          this.redirectToTabsPage();
        }
      }
    );
  }

  redirectToTabsPage(): void {
    this.navCtrl.setRoot(TabsPage);
  }

  showLoader(): void {
    this.loader = this.loadingCtrl.create();
    this.loader.present();
  }

  showToast(message: string): void {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

  handleLogin(): void {
    this.authService.login(this.account).subscribe(
      response => {
        this.tokenService.saveJWTTokenToStorage(response).subscribe(
          () => {
            this.loader.dismiss();
            this.redirectToTabsPage();
          },
          () => {
            this.loader.dismiss();
            this.showToast('Something went wrong');
          }
        );
      },
      response => {
        this.loader.dismiss();
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
    this.showLoader();
    this.authService.register(this.account).subscribe(
      () => this.handleLogin(),
      response => {
        this.loader.dismiss();
        this.showToast(response.json().message);
      }
    );
  }

  login(): void {
    if (!this.account.email || !this.account.password) {
      return;
    }
    this.showLoader();
    this.handleLogin();
  }

}
