import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class MyAccountService {

  constructor(private  Http: HttpClient) { }

    private allusers = 'http://127.0.0.1:8000/my-account/getAll';
    private addusers = 'http://127.0.0.1:8000/my-account/add';
    private majuser = 'http://127.0.0.1:8000/my-account/update/';
    private urluser = 'http://127.0.0.1:8000/my-account/get/';
    private urldel = 'http://127.0.0.1:8000/my-account/delete/';

    addUser(form: any): Observable<any> {
        return this.Http.post<any>(this.addusers, form);
    }

    putUser(user: User): Observable<any> {
        console.log(event);
        const options = {responseType: 'text' as 'json'};
        return this.Http.put<any>(this.majuser + 5, (user), options);
    }

    getUser(): Observable<any> {
        return this.Http.get<any>(this.allusers);
    }

    getOneUser(id) {
        return this.Http.get<any>(this.urluser + id);
    }
    deleteUser(id) {
        return this.Http.delete<any>(this.urldel + 5);
    }
}
