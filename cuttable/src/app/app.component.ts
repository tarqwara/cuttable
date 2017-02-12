import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen, Keyboard } from 'ionic-native';
import { LoginPage } from '../pages/login/login.component';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = LoginPage;

  constructor(private platform: Platform) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.styleDefault();
      StatusBar.overlaysWebView(false);
      StatusBar.backgroundColorByHexString("#FFA000");
      Splashscreen.hide();
    });
  }

  ionViewDidEnter() {
    this.platform.ready().then(() => {
      Keyboard.disableScroll(true);
    });
  }

  ionViewWillLeave() {
    this.platform.ready().then(() => {
      Keyboard.disableScroll(false);
    });
  }

}
