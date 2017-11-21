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
import HomeContoller from "../pages/home/home-contoller";
import {PipesModule} from "../pipes/pipes.module";

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
    PipesModule,
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
    HomeContoller,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
