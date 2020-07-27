import {Component, Input, OnInit, ViewChild, ElementRef} from '@angular/core';
import {ProductService} from '../../../product.service';
import {Product} from '../../../models/product';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {OrderService} from '../../../services/order.service';
import {HttpClient} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {commande} from '../../../models/commande';

declare var paypal;

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
    @ViewChild('paypal', {static: true}) paypalElement: ElementRef;
    totalValue;
    Commande: commande = new commande();
    paidFor = false;
    validinfo = false;

    cartProducts;
    form: FormGroup;
    submitted = false;

    constructor(public fb: FormBuilder,
                private http: HttpClient,
                private toastr: ToastrService,
                private productservice: ProductService,
                private router: Router) {
        this.form = this.fb.group({
            name: ['', Validators.required],
            lastname: ['', Validators.required],
            adress: ['', Validators.required],
            state: ['', Validators.required],
            zipcode: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            phone: ['', Validators.required],
            ordernotes: ['', Validators.required]
        });
    }

    get f() {
        return this.form.controls;
    }

    submitForm() {
        this.submitted = true;
        this.validinfo = true;
        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        } else {
            var formData: any = new FormData();
            formData.append('name', this.form.get('name').value);
            formData.append('lastname', this.form.get('lastname').value);
            formData.append('adress', this.form.get('adress').value);
            formData.append('state', this.form.get('state').value);
            formData.append('zipcode', this.form.get('zipcode').value);
            formData.append('email', this.form.get('email').value);
            formData.append('phone', this.form.get('phone').value);
            formData.append('ordernotes', this.form.get('ordernotes').value);


            this.http.post('http://localhost:8000/order/add', formData).subscribe(
                (response) => this.toastr.success('You Have been Registred Succefully !', 'Congrats!'),
                (error) => console.log(error)
            );
        }
    }

    ngOnInit(): void {
        this.getCartProduct();
        this.totalValue = 0;
        this.cartProducts.forEach((product) => {
            this.totalValue += product.prix;
        });

        console.log(this.totalValue);
        paypal
            .Buttons({
                createOrder: (data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                description: 'Tunisian Products',
                                amount: {
                                    currency_code: 'USD',
                                    value: this.totalValue
                                }
                            }
                        ]
                    });
                },
                onApprove: async (data, actions) => {
                    const order = await actions.order.capture();
                    this.paidFor = true;
                    console.log(order);
                    this.submitForm();
                    this.toastr.info('You Delivery information Have been saved');
                    console.log('test');
                },
                onError: err => {
                    console.log(err);
                }
            })
            .render(this.paypalElement.nativeElement);
    }

    getValue(item) {
        return (item.value);
    }

    getCartProduct() {
        this.cartProducts = this.productservice.getLocalCartProducts();
    }

    redirectSuccesPayment() {
        this.router.navigate(['/how-it-works']);
    }
}
