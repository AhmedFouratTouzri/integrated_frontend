import {Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
import {MessengerService} from '../../../services/messenger.service';
import {Product} from '../../../models/product';
import {ProductService} from '../../../product.service';
import {ToastrService} from "ngx-toastr";

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnChanges {
    cartProducts;
    sumproducts;
    showDataNotFound = true;

    // Not Found Message
    messageTitle = 'No Products Found in Cart';
    messageDescription = 'Please, Add Products to Cart';
    cartItems = [
        //  {id: 1, productId: 1, productName: 'test1', qty: 4, price: 100},
        // {id: 2, productId: 2, productName: 'test2', qty: 4, price: 200},
        //  {id: 3, productId: 3, productName: 'test3', qty: 4, price: 300},
        //  {id: 4, productId: 4, productName: 'test4', qty: 4, price: 400},
    ];
    Qte: any;
    totalValue;
    popoverTitle = 'Be Careful';
    popoverMessage = 'Are you sure you want to delete this item ?';
    confirmClicked = false;
    cancelClicked = false;

    constructor(private productservice: ProductService,
                private toaster: ToastrService) {
    }


    getValue(item) {
        return (item.value);
    }


    ngOnInit() {
        this.getCartProduct();
        this.totalValue = 0;
        this.cartProducts.forEach((product) => {
            this.totalValue += product.prix;
        });

        console.log(this.totalValue);
    }

    removeCartProduct(product) {
        this.productservice.removeLocalCartProduct(product);

        // Recalling
        this.getCartProduct();
        this.toaster.error('Product Removed From Cart ')
    }

    getCartProduct() {
        this.cartProducts = this.productservice.getLocalCartProducts();
    }

    ngOnChanges(changes: SimpleChanges) {
        const dataChanges: SimpleChange = changes.cartProducts;
        const cartProducts = dataChanges.currentValue;
    }

    calaculateSum() {
        // tslint:disable-next-line:label-position
        this.sumproducts = this.getCartProduct();
        this.totalValue = 0;
        this.sumproducts.forEach((product) => {
            this.totalValue += product.prix;
        });
    }

    clearCart() {
        localStorage.clear();
    }


}
