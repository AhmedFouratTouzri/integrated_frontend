import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { AppDownloadComponent } from './components/common/app-download/app-download.component';
import { FeedbackComponent } from './components/common/feedback/feedback.component';
import { VideoComponent } from './components/common/video/video.component';
import { ProcessComponent } from './components/common/process/process.component';
import { HeaderOneComponent } from './components/layouts/header-one/header-one.component';
import { PartnerComponent } from './components/common/partner/partner.component';
import { HeaderTwoComponent } from './components/layouts/header-two/header-two.component';
import { HomeFourComponent } from './components/pages/home-four/home-four.component';
import { InstagramComponent } from './components/common/instagram/instagram.component';
import { HeaderThreeComponent } from './components/layouts/header-three/header-three.component';
import { FunfactsComponent } from './components/common/funfacts/funfacts.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ListingThreeComponent } from './components/pages/listing-three/listing-three.component';
import { ListingDetailsComponent } from './components/pages/listing-details/listing-details.component';
import { ProductListComponent } from './components/pages/product-list/product-list.component';
import { ProductsDetailsComponent } from './components/pages/products-details/products-details.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { BlogOneComponent } from './components/pages/blog-one/blog-one.component';
import { BlogDetailsOneComponent } from './components/pages/blog-details-one/blog-details-one.component';
import { BlogDetailsTwoComponent } from './components/pages/blog-details-two/blog-details-two.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ProductItemComponent } from './components/pages/product-item/product-item.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import {AuthGuard} from "./_guard";
import {AuthenticationService} from "./services/authentication.service";
import {Http, HttpModule, RequestOptions} from "@angular/http";
import {AuthConfig, AuthHttp} from "angular2-jwt";
import { DetailEventComponent } from './detail-event/detail-event.component';
import { AddEventComponent } from './add-event/add-event.component';
import { AddProductComponent } from './components/pages/add-product/add-product.component';
import { CategoryListComponent } from './components/pages/category-list/category-list.component';
import { ProductBycategoryComponent } from './components/pages/product-bycategory/product-bycategory.component';
import { MyAccountComponent } from './my-account/my-account.component';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
    return new AuthHttp( new AuthConfig({}), http, options);
}
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AppDownloadComponent,
    FeedbackComponent,
    VideoComponent,
    ProcessComponent,
    HeaderOneComponent,
    PartnerComponent,
    HeaderTwoComponent,
    HomeFourComponent,
    InstagramComponent,
    HeaderThreeComponent,
    FunfactsComponent,
    ContactComponent,
    ListingThreeComponent,
    ListingDetailsComponent,
    ProductListComponent,
    ProductsDetailsComponent,
    CartComponent,
    CheckoutComponent,
    BlogOneComponent,
    BlogDetailsOneComponent,
    BlogDetailsTwoComponent,
    FaqComponent,
    ErrorComponent,
    ComingSoonComponent,
    LoginComponent,
    RegisterComponent,
    ProductItemComponent,
    DetailEventComponent,
    AddEventComponent,
    AddProductComponent,
    CategoryListComponent,
    ProductBycategoryComponent,
    MyAccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
      HttpModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
      ConfirmationPopoverModule.forRoot({
          confirmButtonType: 'danger', // set defaults here
      })

  ],
    providers: [
        {
            provide: AuthHttp,
            useFactory: authHttpServiceFactory,
            deps: [ Http, RequestOptions ]
        },
        AuthGuard,
        AuthenticationService,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
