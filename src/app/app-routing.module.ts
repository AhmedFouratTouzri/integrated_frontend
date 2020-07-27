import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeOneComponent} from './components/pages/home-one/home-one.component';
import {HomeTwoComponent} from './components/pages/home-two/home-two.component';
import {HomeThreeComponent} from './components/pages/home-three/home-three.component';
import {HomeFourComponent} from './components/pages/home-four/home-four.component';
import {AboutComponent} from './components/pages/about/about.component';
import {HowItWorksComponent} from './components/pages/how-it-works/how-it-works.component';
import {ContactComponent} from './components/pages/contact/contact.component';
import {CategoriesOneComponent} from './components/pages/categories-one/categories-one.component';
import {CategoriesTwoComponent} from './components/pages/categories-two/categories-two.component';
import {ListingDetailsComponent} from './components/pages/listing-details/listing-details.component';
import {ListingFiveComponent} from './components/pages/listing-five/listing-five.component';
import {ListingFourComponent} from './components/pages/listing-four/listing-four.component';
import {ListingThreeComponent} from './components/pages/listing-three/listing-three.component';
import {ListingTwoComponent} from './components/pages/listing-two/listing-two.component';
import {ListingOneComponent} from './components/pages/listing-one/listing-one.component';
import {ProductListComponent} from './components/pages/product-list/product-list.component';
import {ProductsDetailsComponent} from './components/pages/products-details/products-details.component';
import {CartComponent} from './components/pages/cart/cart.component';
import {CheckoutComponent} from './components/pages/checkout/checkout.component';
import {BlogOneComponent} from './components/pages/blog-one/blog-one.component';
import {BlogThreeComponent} from './components/pages/blog-three/blog-three.component';
import {BlogFourComponent} from './components/pages/blog-four/blog-four.component';
import {BlogFiveComponent} from './components/pages/blog-five/blog-five.component';
import {BlogDetailsOneComponent} from './components/pages/blog-details-one/blog-details-one.component';
import {BlogDetailsTwoComponent} from './components/pages/blog-details-two/blog-details-two.component';
import {BlogDetailsThreeComponent} from './components/pages/blog-details-three/blog-details-three.component';
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
    {path: 'home-two', component: HomeTwoComponent},
    {path: 'home-three', component: HomeThreeComponent},
    {path: 'home', component: HomeFourComponent},
    {path: 'about', component: AboutComponent},
    {path: 'how-it-works', component: HowItWorksComponent},
    {path: 'categories-one', component: CategoriesOneComponent},
    {path: 'categories-two', component: CategoriesTwoComponent},
    {path: 'places', component: ListingOneComponent},
    {path: 'listing-two', component: ListingTwoComponent},
    {path: 'events', component: ListingThreeComponent},
    {path: 'listing-four', component: ListingFourComponent},
    {path: 'listing-five', component: ListingFiveComponent},
    {path: 'place-details/:id', component: ListingDetailsComponent},
    {path: 'complaints', component: BlogOneComponent},
    {path: 'blog-three', component: BlogThreeComponent},
    {path: 'blog-four', component: BlogFourComponent},
    {path: 'blog-five', component: BlogFiveComponent},
    {path: 'complaint-details/:id', component: BlogDetailsOneComponent},
    {path: 'update-complaint/:id', component: BlogDetailsTwoComponent},
    {path: 'blog-details-three', component: BlogDetailsThreeComponent},
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
