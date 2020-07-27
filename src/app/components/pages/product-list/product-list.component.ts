import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../product.service';
import {Product} from '../../../models/product';
import {MessengerService} from '../../../services/messenger.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
productList = [];
    public id: any;
    private errorMessage: string;
    public test: any;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
      this.productService.getproducts().subscribe(data => {
          console.log(data);
          this.productList = data;
      });
  }

    addToCart(product) {
        this.productService.addToCart(product);
    }

}
