import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Emplacement} from '../models/Emplacement';

@Injectable({
    providedIn: 'root'
})
export class EmplacementService {
    url = 'http://127.0.0.1:8000/emplacement/lists';
    urlajout = 'http://127.0.0.1:8000/emplacement/add';
    urlupdate = 'http://127.0.0.1:8000/emplacement/edit/';
    urldelete = 'http://127.0.0.1:8000/emplacement/delete/';
    urloneemp = 'http://127.0.0.1:8000/emplacement/emp/';

    constructor(private http: HttpClient) {
    }

    getemplacement() {

        return this.http.get(this.url);

    }

    addemp(emplacement) {
        return this.http.post<any>(this.urlajout, emplacement);
    }

    updateemp(emplacement) {
        return this.http.put<any>(this.urlupdate + emplacement.id, emplacement);
    }

    deletEemp(id) {
        return this.http.delete<any>(this.urldelete + id);
    }

    getOneEmp(id) {
        return this.http.get<any>(this.urloneemp + id);
    }
}
