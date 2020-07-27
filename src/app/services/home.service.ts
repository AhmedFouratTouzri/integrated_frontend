import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
    private Lastlistings = 'http://127.0.0.1:8000/last_listings'
    private homeblogs = 'http://127.0.0.1:8000/last_posts'

    constructor(private Http: HttpClient) {
    }

    getlastlistings(): Observable<any> {
        return this.Http.get<any>(this.Lastlistings);
    }

    getblogsHome(): Observable<any> {
        return this.Http.get<any>(this.homeblogs);
    }
}
