import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login.component';
import { TabsPage } from '../pages/tabs/tabs.component';
import { HomePage } from '../pages/home/home.component';
import { SalonsPage } from '../pages/salons/salons.component';
import { AppointmentsPage } from '../pages/appointments/appointments.component';
import { SettingsPage } from '../pages/settings/settings.component';
import { HttpService } from '../providers/http-service';
import { TokenService } from '../providers/token-service';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    TabsPage,
    HomePage,
    SalonsPage,
    AppointmentsPage,
    SettingsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, { scrollAssist: false, autoFocusAssist: false })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    TabsPage,
    HomePage,
    SalonsPage,
    AppointmentsPage,
    SettingsPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    HttpService,
    TokenService,
    Storage
  ]
})
export class AppModule {
}
