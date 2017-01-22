import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Config} from '../config/config';

@Injectable()
export class HttpService {

  constructor(public http: Http) {
  }

  post(url: String, body: Object) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(Config.API_URL + url, body, options);
  }
}
