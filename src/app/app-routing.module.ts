import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeFourComponent} from './components/pages/home-four/home-four.component';
import {ContactComponent} from './components/pages/contact/contact.component';
import {ListingDetailsComponent} from './components/pages/listing-details/listing-details.component';
import {ListingThreeComponent} from './components/pages/listing-three/listing-three.component';
import {ProductListComponent} from './components/pages/product-list/product-list.component';
import {ProductsDetailsComponent} from './components/pages/products-details/products-details.component';
import {CartComponent} from './components/pages/cart/cart.component';
import {CheckoutComponent} from './components/pages/checkout/checkout.component';
import {BlogOneComponent} from './components/pages/blog-one/blog-one.component';
import {BlogDetailsOneComponent} from './components/pages/blog-details-one/blog-details-one.component';
import {BlogDetailsTwoComponent} from './components/pages/blog-details-two/blog-details-two.component';
import {FaqComponent} from './components/pages/faq/faq.component';
import {ErrorComponent} from './components/pages/error/error.component';
import {ComingSoonComponent} from './components/pages/coming-soon/coming-soon.component';
import {LoginComponent} from './components/pages/login/login.component';
import {RegisterComponent} from './components/pages/register/register.component';
import {AuthGuard} from './_guard';
import {DetailEventComponent} from "./detail-event/detail-event.component";
import {AddEventComponent} from "./add-event/add-event.component";
import {AddProductComponent} from "./components/pages/add-product/add-product.component";
import {ProductBycategoryComponent} from "./components/pages/product-bycategory/product-bycategory.component";
import { MyAccountComponent } from './my-account/my-account.component';

const routes: Routes = [
    {path: '', component: HomeFourComponent, canActivate: [AuthGuard]},
    {path: 'home', component: HomeFourComponent},
    {path: 'events', component: ListingThreeComponent},
    {path: 'place-details/:id', component: ListingDetailsComponent},
    {path: 'complaints', component: BlogOneComponent},
    {path: 'complaint-details/:id', component: BlogDetailsOneComponent},
    {path: 'update-complaint/:id', component: BlogDetailsTwoComponent},
    {path: 'shop', component: ProductListComponent},
    {path: 'update-event/:id', component: ProductsDetailsComponent},
    {path: 'event-details/:id', component: DetailEventComponent},
    {path: 'add-event', component: AddEventComponent},
    {path: 'cart', component: CartComponent},
    {path: 'checkout', component: CheckoutComponent},
    {path: 'faqs', component: FaqComponent},
    {path: 'error', component: ErrorComponent},
    {path: 'coming-soon', component: ComingSoonComponent},
    {path: 'login', component: LoginComponent},
    {path: 'add-complaint', component: AddProductComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'product-bycategory/:id', component: ProductBycategoryComponent},
    {path: 'my-account', component: MyAccountComponent},
    {path: '**', component: ErrorComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
