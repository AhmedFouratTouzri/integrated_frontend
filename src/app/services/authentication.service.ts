import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: Http) { }

    logout() {
        localStorage.removeItem('id_token');
    }

    loggedIn() {
        return tokenNotExpired();
    }
}
