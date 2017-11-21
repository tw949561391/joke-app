import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {SearchPage} from "../pages/search/search";
import {HttpClientModule} from "@angular/common/http";
import {ProfilePage} from "../pages/profile/profile";
import {HomeNav} from "../pages/nav/nav";
import {MyPage} from "../pages/my/my";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProfilePage,
    HomeNav,
    SearchPage,
    MyPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProfilePage,
    HomeNav,
    SearchPage,
    MyPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
