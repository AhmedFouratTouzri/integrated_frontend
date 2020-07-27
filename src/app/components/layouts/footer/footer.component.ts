import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../product.service';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    cartProducts = [];
    nbproducts = this.productservice.getLocalCartProducts().length
    popoverTitle = 'Be Careful';
    popoverMessage = 'Are you sure you want to delete this item ?';
    confirmClicked = false;
    cancelClicked = false;
    constructor(private productservice: ProductService,
                private toaster: ToastrService) { }

  ngOnInit(): void {
      this.cartProducts = this.productservice.getLocalCartProducts();
  }

    removeCartProduct(product) {
        this.productservice.removeLocalCartProduct(product);

        // Recalling
        this.productservice.getLocalCartProducts();
        this.toaster.error('Product Removed From Cart ');
    }

}
