import { Component } from '@angular/core';
import { AccountService } from '../../providers/account-service';

@Component({
	selector: 'settings-page',
	templateUrl: 'settings.html',
	providers: [AccountService]
})
export class SettingsPage {

	constructor(private accountService: AccountService) { }

	logout(): void {
		this.accountService.logout();
	}

}