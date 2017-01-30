import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import {Config} from '../config/config';
import {forOwn} from 'lodash';

@Injectable()
export class HttpService {

  constructor(public http: Http) {
  }

  get(endpoint: string, params: Object) {
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let searchParams = new URLSearchParams();
    forOwn(params, function(value, key) {
      searchParams.set(key, value);
    });
    let options = new RequestOptions({
      headers: headers,
      search: searchParams
    });
    return this.http.get(Config.API_URL + endpoint, options);
  }

  post(endpoint: string, params: Object) {
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let searchParams = new URLSearchParams();
    forOwn(params, function(value, key) {
      searchParams.set(key, value);
    });
    let options = new RequestOptions({
      headers: headers,
      search: searchParams
    });
    return this.http.post(Config.API_URL + endpoint, {}, options);
  }
}
