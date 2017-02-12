import { Component } from '@angular/core';
import { AuthService } from '../../providers/auth.service';

@Component({
	selector: 'settings-page',
	templateUrl: 'settings.html',
	providers: [AuthService]
})
export class SettingsPage {

	constructor(private authService: AuthService) { }

	logout(): void {
		this.authService.logout();
	}

}