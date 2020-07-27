import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../product.service';
import {Product} from '../../../models/product';
import {ActivatedRoute} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-hbibproduct-detail',
  templateUrl: './hbibproduct-detail.component.html',
  styleUrls: ['./hbibproduct-detail.component.scss']
})
export class HbibproductDetailComponent implements OnInit {
    id: any;
    product;

    constructor(private route: ActivatedRoute, private api: ProductService , private toaster: ToastrService) {
    }

    ngOnInit(): void {
        this.id = this.route.snapshot.params.id;
        console.log('-------------------------------------------------------');
        console.log(this.id);
        this.api.getsingleproduct(this.id).subscribe(data => {
            this.product = data;
            console.log(this.product);
            console.log('yep yep  !!!!');
        });
    }
    addToCart(product) {
        this.api.addToCart(product);
        this.toaster.success('Product Added To Cart :D');
    }
}
