import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { StickyNavModule } from 'ng2-sticky-nav';
import { TabsModule } from 'ngx-tabset';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LightboxModule } from 'ngx-lightbox';
import { AccordionModule } from "ngx-accordion";
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { NotifierModule } from 'angular-notifier';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MarkdownModule } from 'ngx-markdown';
import { JwtModule } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeDemoTwoComponent } from './components/pages/home-demo-two/home-demo-two.component';
import { HomeDemoThreeComponent } from './components/pages/home-demo-three/home-demo-three.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { SubscribeComponent } from './components/common/subscribe/subscribe.component';
import { BlogComponent } from './components/common/blog/blog.component';
import { PartnerComponent } from './components/common/partner/partner.component';
import { FeedbackComponent } from './components/common/feedback/feedback.component';
import { FacilityComponent } from './components/common/facility/facility.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { CollectionComponent } from './components/common/collection/collection.component';
import { ProductsComponent } from './components/common/products/products.component';
import { HometwoSubscribeComponent } from './components/pages/home-demo-two/hometwo-subscribe/hometwo-subscribe.component';
import { HometwoFeedbackComponent } from './components/pages/home-demo-two/hometwo-feedback/hometwo-feedback.component';
import { HometwoCollectionComponent } from './components/pages/home-demo-two/hometwo-collection/hometwo-collection.component';
import { TrendingProductsComponent } from './components/common/trending-products/trending-products.component';
import { HometwoAdsComponent } from './components/pages/home-demo-two/hometwo-ads/hometwo-ads.component';
import { HometwoProductsComponent } from './components/pages/home-demo-two/hometwo-products/hometwo-products.component';
import { HometwoBannerComponent } from './components/pages/home-demo-two/hometwo-banner/hometwo-banner.component';
import { HometwoFacilityComponent } from './components/pages/home-demo-two/hometwo-facility/hometwo-facility.component';
import { HomethreeBannerComponent } from './components/pages/home-demo-three/homethree-banner/homethree-banner.component';
import { HomethreeCollectionComponent } from './components/pages/home-demo-three/homethree-collection/homethree-collection.component';
import { HomethreeProductsComponent } from './components/pages/home-demo-three/homethree-products/homethree-products.component';
import { HomethreeFacilityComponent } from './components/pages/home-demo-three/homethree-facility/homethree-facility.component';
import { HomethreeTrendingProductsComponent } from './components/pages/home-demo-three/homethree-trending-products/homethree-trending-products.component';
import { HomethreeFeedbackComponent } from './components/pages/home-demo-three/homethree-feedback/homethree-feedback.component';
import { HomethreeSubscribeComponent } from './components/pages/home-demo-three/homethree-subscribe/homethree-subscribe.component';
import { FeedbackPageComponent } from './components/pages/feedback-page/feedback-page.component';
import { OrderTrackingPageComponent } from './components/pages/order-tracking-page/order-tracking-page.component';
import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';
import { DeliveryReturnsPageComponent } from './components/pages/delivery-returns-page/delivery-returns-page.component';
import { ShippingPageComponent } from './components/pages/shipping-page/shipping-page.component';
import { PrivacyPolicyPageComponent } from './components/pages/privacy-policy-page/privacy-policy-page.component';
import { TermsConditionsPageComponent } from './components/pages/terms-conditions-page/terms-conditions-page.component';
import { ComingSoonPageComponent } from './components/pages/coming-soon-page/coming-soon-page.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { MyAccountPageComponent } from './components/pages/my-account-page/my-account-page.component';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { GalleryTwoColumnPageComponent } from './components/pages/gallery-two-column-page/gallery-two-column-page.component';
import { GalleryThreeColumnPageComponent } from './components/pages/gallery-three-column-page/gallery-three-column-page.component';
import { GalleryFourColumnPageComponent } from './components/pages/gallery-four-column-page/gallery-four-column-page.component';
import { GalleryFilterPageComponent } from './components/pages/gallery-filter-page/gallery-filter-page.component';
import { BlogGridPageComponent } from './components/pages/blog-grid-page/blog-grid-page.component';
import { BlogLeftSidebarPageComponent } from './components/pages/blog-left-sidebar-page/blog-left-sidebar-page.component';
import { BlogRightSidebarPageComponent } from './components/pages/blog-right-sidebar-page/blog-right-sidebar-page.component';
import { BlogDetailsPageComponent } from './components/pages/blog-details-page/blog-details-page.component';
import { FunfactsComponent } from './components/common/funfacts/funfacts.component';
import { TeamComponent } from './components/common/team/team.component';
import { WidgetSidebarComponent } from './components/common/widget-sidebar/widget-sidebar.component';
import { ProductsDetailsPageComponent } from './components/pages/products-details-page/products-details-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { WishlistPageComponent } from './components/pages/wishlist-page/wishlist-page.component';
import { ShopFullwidthPageOneComponent } from './components/pages/shop-fullwidth-page-one/shop-fullwidth-page-one.component';
import { ShopFullwidthPageTwoComponent } from './components/pages/shop-fullwidth-page-two/shop-fullwidth-page-two.component';
import { ShopLeftSidebarPageOneComponent } from './components/pages/shop-left-sidebar-page-one/shop-left-sidebar-page-one.component';
import { ShopLeftSidebarPageTwoComponent } from './components/pages/shop-left-sidebar-page-two/shop-left-sidebar-page-two.component';
import { ShopRightSidebarPageTwoComponent } from './components/pages/shop-right-sidebar-page-two/shop-right-sidebar-page-two.component';
import { ShopRightSidebarPageOneComponent } from './components/pages/shop-right-sidebar-page-one/shop-right-sidebar-page-one.component';
import { ComparePageComponent } from './components/pages/compare-page/compare-page.component';
import { DynamicProductsDetailsPageComponent } from './components/pages/dynamic-products-details-page/dynamic-products-details-page.component';
import { PsComponent } from './components/ps/ps.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ACCES_TOKEN_KEY } from './services/auth.service';
import { API_URL } from './app-injection-token';
import { TokenInterceptor } from './shared/classes/token.interceptor';
import { XboxComponent } from './components/xbox/xbox.component';
import { AppleComponent } from './components/apple/apple.component';
import { VcComponent } from './components/vc/vc.component';
import { CpuComponent } from './components/cpu/cpu.component';
import { SearchComponent } from './components/search/search.component';
import { AppleLaptopComponent } from './components/apple-laptop/apple-laptop.component';
import { SamsungPhoneComponent } from './components/samsung-phone/samsung-phone.component';
import { AsusLaptopComponent } from './components/asus-laptop/asus-laptop.component';

export function tokenGetter() {
  return localStorage.getItem(ACCES_TOKEN_KEY);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeDemoTwoComponent,
    HomeDemoThreeComponent,
    FooterComponent,
    SubscribeComponent,
    BlogComponent,
    PartnerComponent,
    FeedbackComponent,
    FacilityComponent,
    NavbarComponent,
    CollectionComponent,
    ProductsComponent,
    HometwoSubscribeComponent,
    HometwoFeedbackComponent,
    HometwoCollectionComponent,
    TrendingProductsComponent,
    HometwoAdsComponent,
    HometwoProductsComponent,
    HometwoBannerComponent,
    HometwoFacilityComponent,
    HomethreeBannerComponent,
    HomethreeCollectionComponent,
    HomethreeProductsComponent,
    HomethreeFacilityComponent,
    HomethreeTrendingProductsComponent,
    HomethreeFeedbackComponent,
    HomethreeSubscribeComponent,
    FeedbackPageComponent,
    OrderTrackingPageComponent,
    FaqPageComponent,
    DeliveryReturnsPageComponent,
    ShippingPageComponent,
    PrivacyPolicyPageComponent,
    TermsConditionsPageComponent,
    ComingSoonPageComponent,
    AboutPageComponent,
    ContactPageComponent,
    MyAccountPageComponent,
    NotFoundComponent,
    GalleryTwoColumnPageComponent,
    GalleryThreeColumnPageComponent,
    GalleryFourColumnPageComponent,
    GalleryFilterPageComponent,
    BlogGridPageComponent,
    BlogLeftSidebarPageComponent,
    BlogRightSidebarPageComponent,
    BlogDetailsPageComponent,
    FunfactsComponent,
    TeamComponent,
    WidgetSidebarComponent,
    ProductsDetailsPageComponent,
    CartPageComponent,
    CheckoutPageComponent,
    WishlistPageComponent,
    ShopFullwidthPageOneComponent,
    ShopFullwidthPageTwoComponent,
    ShopLeftSidebarPageOneComponent,
    ShopLeftSidebarPageTwoComponent,
    ShopRightSidebarPageTwoComponent,
    ShopRightSidebarPageOneComponent,
    ComparePageComponent,
    DynamicProductsDetailsPageComponent,
    PsComponent,
    PaymentComponent,
    XboxComponent,
    AppleComponent,
    VcComponent,
    CpuComponent,
    SearchComponent,
    AppleLaptopComponent,
    SamsungPhoneComponent,
    AsusLaptopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    StickyNavModule,
    NgxScrollTopModule,
    TabsModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    LightboxModule,
    AccordionModule,
    NgxSliderModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
    NotifierModule,
    NgxPaginationModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        allowedDomains: [environment.tokenWhitelistedDomains]
      }
    })
  ],
  providers: [{
    provide: API_URL,
    useValue: environment.api
  },{
    provide: HTTP_INTERCEPTORS,
    multi: true,
    useClass: TokenInterceptor
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
