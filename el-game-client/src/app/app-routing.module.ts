import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppleLaptopComponent } from './components/apple-laptop/apple-laptop.component';
import { AppleComponent } from './components/apple/apple.component';
import { AsusLaptopComponent } from './components/asus-laptop/asus-laptop.component';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { CpuComponent } from './components/cpu/cpu.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { DeliveryReturnsPageComponent } from './components/pages/delivery-returns-page/delivery-returns-page.component';
import { DynamicProductsDetailsPageComponent } from './components/pages/dynamic-products-details-page/dynamic-products-details-page.component';
import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';
import { HomeDemoThreeComponent } from './components/pages/home-demo-three/home-demo-three.component';
import { MyAccountPageComponent } from './components/pages/my-account-page/my-account-page.component';
import { PrivacyPolicyPageComponent } from './components/pages/privacy-policy-page/privacy-policy-page.component';
import { ShippingPageComponent } from './components/pages/shipping-page/shipping-page.component';
import { TermsConditionsPageComponent } from './components/pages/terms-conditions-page/terms-conditions-page.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PsComponent } from './components/ps/ps.component';
import { SamsungPhoneComponent } from './components/samsung-phone/samsung-phone.component';
import { SearchComponent } from './components/search/search.component';
import { VcComponent } from './components/vc/vc.component';
import { XboxComponent } from './components/xbox/xbox.component';
import { OnpayGuard } from './guards/onpay.guard';
import { AsuslaptopResolverService } from './services/asuslaptop-resolver.service';
import { CpuResolverService } from './services/cpu-resolver.service';
import { CvResolverService } from './services/cv-resolver.service';
import { IphoneResolverService } from './services/iphone-resolver.service';
import { MacResolverService } from './services/mac-resolver.service';
import { ProductResolverService } from './services/product-resolver.service';
import { PS5ResolverService } from './services/ps5-resolver.service';
import { SamsunglaptopResolverService } from './services/samsunglaptop-resolver.service';
import { XboxResolverService } from './services/xbox-resolver.service';

const routes: Routes = [
    {path: '', component: HomeDemoThreeComponent},
    {path: 'about', component: AboutPageComponent},
    {path: 'play-station', component: PsComponent, resolve: { products: PS5ResolverService}},
    {path: 'xbox', component: XboxComponent, resolve: { products: XboxResolverService}},
    {path: 'apple', component: AppleComponent, resolve: { products: IphoneResolverService}},
    {path: 'vc', component: VcComponent, resolve: { products: CvResolverService}},
    {path: 'cpu', component: CpuComponent, resolve: { products: CpuResolverService}},
    {path: 'apple-laptop', component: AppleLaptopComponent, resolve: { products: MacResolverService}},
    {path: 'samsung', component: SamsungPhoneComponent, resolve: { products: SamsunglaptopResolverService}},
    {path: 'asus-laptop', component: AsusLaptopComponent, resolve: { products: AsuslaptopResolverService}},
    {path: 'search', component: SearchComponent},
    {path: 'products/:slug', component: DynamicProductsDetailsPageComponent, resolve: { products: ProductResolverService}},
    {path: 'cart', component: CartPageComponent},
    {path: 'checkout', component: CheckoutPageComponent},
    {path: 'payment', component: PaymentComponent},
    {path: 'profile', component: MyAccountPageComponent},
    {path: 'faq', component: FaqPageComponent},
    {path: 'delivery-returns', component: DeliveryReturnsPageComponent},
    {path: 'privacy-policy', component: PrivacyPolicyPageComponent},
    {path: 'terms-conditions', component: TermsConditionsPageComponent},
    {path: 'contact', component: ContactPageComponent},
    // Here add new pages component
    
    { path: '**', component: NotFoundComponent } // This line will remain down from the whole pages component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }