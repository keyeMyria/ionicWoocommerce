import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Menu } from '../pages/menu/menu';
import { ProductsByCategory } from '../pages/products-by-category/products-by-category';
import { ProductDetails } from '../pages/product-details/product-details';
import { Cart } from '../pages/cart/cart';
import { Signup } from '../pages/signup/signup';
import { Login } from '../pages/login/login';
import { Checkout } from '../pages/checkout/checkout';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { PayPal } from '@ionic-native/paypal';
import { SearchPage } from '../pages/search/search';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Menu,
    ProductsByCategory,
    ProductDetails,
    Cart,
    Signup,
    Login,
    Checkout,
    SearchPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Menu,
    ProductsByCategory,
    ProductDetails,
    Cart,
    Signup,
    Login,
    Checkout,
    SearchPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PayPal,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
