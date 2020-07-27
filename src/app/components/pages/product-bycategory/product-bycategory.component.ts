import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {CategoryService} from '../../../category.service';
import {Produitparcategorie} from '../../../models/produitparcategorie';
import {ProductService} from '../../../product.service';

@Component({
    selector: 'app-product-bycategory',
    templateUrl: './product-bycategory.component.html',
    styleUrls: ['./product-bycategory.component.scss']
})
export class ProductBycategoryComponent implements OnInit {
    list: Produitparcategorie[] = [];
    id: number;

    constructor(private api: CategoryService, private route: ActivatedRoute, private toastr: ToastrService,
                private productservice: ProductService) {
    }

    ngOnInit() {
        this.id = this.route.snapshot.params.id;
        this.api.getsinglcategoryproduct(this.id).subscribe(data => {
            console.log(data);
            this.list = data;
            console.log(this.list);
        });
    }

    addToCart(product) {
        this.productservice.addToCart(product);
        this.toastr.success('Product Added To Cart :D');
    }

}
