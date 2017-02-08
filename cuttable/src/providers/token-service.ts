import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

const BEARER = 'Bearer';

@Injectable()
export class TokenService {

	constructor(public storage: Storage) { }

	saveJWTTokenToStorage(response: Response): Observable<any> {
		let headers = response.headers;
		let authorizationHeader = headers.get('Authorization');
		if (!authorizationHeader) {
			return Observable.throw('Authorization header missing');
		}

		if (!authorizationHeader.startsWith(BEARER)) {
			return Observable.throw('Bearer missing in authorization header');
		}

		let JWTToken = authorizationHeader.substr(BEARER.length + 1);
		return Observable.fromPromise(this.storage.set('JWTToken', JWTToken));
	}

	getJWTToken(): Observable<any> {
		return Observable.fromPromise(this.storage.get('JWTToken'));
	}

};