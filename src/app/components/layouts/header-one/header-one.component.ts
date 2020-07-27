import { Component, OnInit } from '@angular/core';
import {Product} from '../../../models/product';
import {ProductService} from '../../../product.service';

@Component({
  selector: 'app-header-one',
  templateUrl: './header-one.component.html',
  styleUrls: ['./header-one.component.scss']
})
export class HeaderOneComponent implements OnInit {
    cartProducts: Product[];
    nbproducts = this.productservice.getLocalCartProducts().length
  constructor(private productservice: ProductService) { }

  ngOnInit(): void {
  }

}
