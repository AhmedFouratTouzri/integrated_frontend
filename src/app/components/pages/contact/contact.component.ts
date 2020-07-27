import { Component, OnInit } from '@angular/core';
import {ContactService} from "../../../services/contact.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
    FormData: FormGroup;
    constructor(private builder: FormBuilder, private contact: ContactService) {
    }

    ngOnInit(): void {
        this.FormData = this.builder.group({
            name: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
            phone: new FormControl('', [Validators.required]),
            msg: new FormControl('', [Validators.required])
        }); }

    onSubmit(FormData) {
        console.log(FormData)
        this.contact.PostMessage(FormData)
            .subscribe(response => {
                console.log(response)
            }, error => {
                console.warn(error.responseText)
                console.log({error})
            });

    }
}
