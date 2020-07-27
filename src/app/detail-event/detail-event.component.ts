import {Component, Input, OnInit} from '@angular/core';
import {Event} from '../models/event';
import {ActivatedRoute, Router} from '@angular/router';
import {EventService} from '../services/event.service';
import {HomeService} from "../services/home.service";

@Component({
    selector: 'app-event-details',
    templateUrl: './detail-event.component.html',
    styleUrls: ['./detail-event.component.scss']
})
export class DetailEventComponent implements OnInit {
    id: any;
    event = new Event();
    eve: any;
    blogs = [];
    msg: string;
    test: any;
    private errorMessage: string;

    constructor(private activatedRoute: ActivatedRoute, private routers: Router, private service: EventService, private homeservice: HomeService) {
    }

    ngOnInit(): void {
        this.id = this.activatedRoute.snapshot.params.id;
        this.service.getOneEvent(this.id).subscribe(evt => {
            this.event = evt;
        });
        this.eve = document.getElementById('iduser').id;
        this.homeservice.getblogsHome().subscribe(evt => this.blogs = evt);
    }
}
