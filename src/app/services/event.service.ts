import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Event} from '../models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private  Http: HttpClient) { }

    private allevents = 'http://127.0.0.1:8000/event/events';
    private addevents = 'http://127.0.0.1:8000/event/add';
    private majevents = 'http://127.0.0.1:8000/event/eventupdate/';
    private urlevent = 'http://127.0.0.1:8000/event/getEventbyid/';
    private urldel = 'http://127.0.0.1:8000/event/deleteevenement/';

    addevent(form: any): Observable<any> {
        return this.Http.post<any>(this.addevents, form);
    }

    putevent(event: Event): Observable<any> {
        console.log(event);
        const options = {responseType: 'text' as 'json'};
        return this.Http.put<any>(this.majevents + event.id, (event), options);
    }

    getevent(): Observable<any> {
        return this.Http.get<any>(this.allevents);
    }

    getOneEvent(id) {
        return this.Http.get<any>(this.urlevent + id);
    }
    deleteEvent(id) {
        return this.Http.delete<any>(this.urldel + id);
    }
}
