import {Component, Input, OnInit} from '@angular/core';
import {MessengerService} from '../../../services/messenger.service';
import {ProductService} from '../../../product.service';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
    @Input() productItem;

    constructor(private productservice: ProductService,
                private toaster: ToastrService) {
    }

    ngOnInit(): void {
    }

    addToCart(product) {
        this.productservice.addToCart(product);
        this.toaster.success('Product Added To Cart :D');
    }


}
