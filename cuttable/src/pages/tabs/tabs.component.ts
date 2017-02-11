import { Component } from '@angular/core';
import { HomePage } from '../home/home.component';
import { SalonsPage } from '../salons/salons.component';
import { AppointmentsPage } from '../appointments/appointments.component';
import { SettingsPage } from '../settings/settings.component';

@Component({
	selector: 'tabs-page',
	templateUrl: 'tabs.html'
})
export class TabsPage {
	homePage: any = HomePage;
	salonsPage: any = SalonsPage;
	appointmentsPage: any = AppointmentsPage;
	settingsPage: any = SettingsPage;
}