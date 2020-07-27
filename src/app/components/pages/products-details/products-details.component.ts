import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../models/product';
import {Event} from '../../../models/event';
import {ActivatedRoute, Router} from "@angular/router";
import {EventService} from '../../../services/event.service';
import {ProductService} from '../../../product.service';
import {ToastrService} from "ngx-toastr";

@Component({
    selector: 'app-products-details',
    templateUrl: './products-details.component.html',
    styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit {
    @Input() productItem: Product
    id: any;
    event = new Event();
    eve: any;
    msg: string;
    test: any;
    private errorMessage: string;

    constructor(private activatedRoute: ActivatedRoute, private routers: Router, private service: EventService) {
    }

    ngOnInit(): void {
        this.id = this.activatedRoute.snapshot.params.id;
        this.service.getOneEvent(this.id).subscribe(evt => {
            this.event = evt;
        });
        this.eve = document.getElementById('iduser').id;
    }

    putEvent() {


        // this.emplacement.photo = this.namePhoto;
        console.log(this.event);
        //  console.log(formulaire.value);
        this.service.putevent(this.event).subscribe(response => {
            this.msg = response;
            console.log(this.msg);
            console.log('update successyfullyyyyyyy !!!!');
        });
    }
}
