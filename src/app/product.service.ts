import { Injectable } from '@angular/core';
import {Product} from './models/product';
import {ToastrService} from './services/toastr.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {NgForm} from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
    private allproduct = 'http://127.0.0.1:8000/product';
    private singleproduct = 'http://127.0.0.1:8000/product/';
    private addproduct = 'http://127.0.0.1:8000/product/add';
    private delproduct = 'http://127.0.0.1:8000//removeProduct/';
    private qte: any;
    products: Product[] = [
        new Product('avct_item', 'test1', 12, 1, 12),
        new Product('test', 'test2', 88, 0, 66),
        new Product('test1', 'test3', 12, 0, 100),

    ];

    constructor(private Http: HttpClient) {
    }

    getProducts(): Product[] {
        return this.products;
    }

    // Adding new Product to cart db if logged in else localStorage
    addToCart(data: Product): void {
        const a: Product[] = JSON.parse(localStorage.getItem('avct_item')) || [];
        a.push(data);
        setTimeout(() => {
            localStorage.setItem('avct_item', JSON.stringify(a));
        }, 500);
    }

    // Removing cart from local
    removeLocalCartProduct(product: Product) {
        const products: Product[] = JSON.parse(localStorage.getItem('avct_item'));

        for (let i = 0; i < products.length; i++) {
            if (products[i].productId === product.productId) {
                products.splice(i, 1);
                break;
            }
        }
        // ReAdding the products after remove
        localStorage.setItem('avct_item', JSON.stringify(products));
    }

    // Fetching Locat CartsProducts
    getLocalCartProducts(): Product[] {
        const products: Product[] =
            JSON.parse(localStorage.getItem('avct_item')) || [];

        return products;
    }

    getproducts(): Observable<any> {
        return this.Http.get<any>(this.allproduct);
    }

    getproductcategory(id: any): Observable<any> {
        return this.Http.get<any>(this.singleproduct + id);
    }

    deleteproduct(id: any): Observable<any> {
        return this.Http.delete<any>(this.delproduct + id);
    }

    addproductapi(form: any): Observable<any> {
        return this.Http.post<any>(this.addproduct, form);
    }

    getsingleproduct(id): Observable<any> {
        return this.Http.get<any>(this.singleproduct + id);
    }

}
