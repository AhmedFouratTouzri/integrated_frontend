import {Component, OnInit} from '@angular/core';
import {EventService} from "../services/event.service";
import {HttpClient} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";
import {NgForm} from "@angular/forms";
import {Router} from '@angular/router';

@Component({
    selector: 'app-add-event',
    templateUrl: './add-event.component.html',
    styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {
    form: NgForm;
    msg: string;
    private errorMessage: string;

    constructor(private http: HttpClient, private eventservice: EventService, private toast: ToastrService, private route: Router) {
    }

    ngOnInit(): void {
    }

    addEvent(form) {
        const titre = form.value.titre;
        const prix = form.value.prix;
        const description = form.value.description;
        const datedebut = form.value.datedebut;
        const iduser = form.value.iduser;
        console.log(form.value);
        this.eventservice.addevent(form.value).subscribe(reponse => {
                this.toast.success('You have Succefully Added An Event', 'Thank You');
                this.route.navigate(['events']);

            },
            error => {
                this.toast.error('An Error Occured', 'Please Try Again');
            });
    }

}
