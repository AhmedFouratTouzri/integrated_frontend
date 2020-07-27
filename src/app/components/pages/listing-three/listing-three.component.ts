import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EventService} from '../../../services/event.service';
import {NgForm} from "@angular/forms";
import {ToastrService} from "ngx-toastr";

@Component({
    selector: 'app-listing-three',
    templateUrl: './listing-three.component.html',
    styleUrls: ['./listing-three.component.scss']
})
export class ListingThreeComponent implements OnInit {
    form: NgForm;
    msg: string;
    public event = [];
    private errorMessage: string;
    public newevents = [];

    constructor(private http: HttpClient, private serviceevent: EventService, private toast: ToastrService) {
    }

    ngOnInit(): void {
        this.serviceevent.getevent().subscribe(data => {
            this.event = data;
        });
    }

    refreshPage(): void {
        this.serviceevent.getevent().subscribe(data => {
            this.event = data;
        });
    }

    addEvent(form) {
        const titre = form.value.titre;
        const prix = form.value.prix;
        const description = form.value.description;
        const datedebut = form.value.datedebut;
        const iduser = form.value.iduser;
        console.log(form.value);
        this.serviceevent.addevent(form.value).subscribe(reponse => {
                console.log('added');
            },
            error => {
                this.errorMessage = error.msg;
            });
    }

    remove(id): void {
        const headers = new Headers({'Content-Type': 'application/json; charset = utf-8;'});
        console.log(this.serviceevent.deleteEvent(id));
        this.serviceevent.deleteEvent(id).subscribe(data => {
            this.toast.success('Event Deleted With Success', 'Thank you');
        });
        this.refreshPage();
    }


}
