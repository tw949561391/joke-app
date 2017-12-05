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
import {ScreenOrientation} from "@ionic-native/screen-orientation";
import {Vibration} from "@ionic-native/vibration";
import {ThreeDeeTouch} from "@ionic-native/three-dee-touch";
import {SQLite} from "@ionic-native/sqlite";
import {IonicStorageModule} from "@ionic/storage";
import {ChatPage} from "../pages/chat/chat";

@NgModule({
  declarations: [
    MyApp,
    //tabs
    HomePage,
    ChatPage,
    MyPage,
    //--
    HomeNav,
    ProfilePage,
    SearchPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PipesModule,
    IonicModule.forRoot(MyApp,{
      backButtonText: '返回',
    }),
    IonicStorageModule.forRoot({
      name: 'miup_db',
      driverOrder: ['websql', 'indexeddb', 'sqlite']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

    //三个tab
    HomePage,
    ChatPage,
    MyPage,

    //---
    ProfilePage,
    HomeNav,
    SearchPage,
  ],
  providers: [
    //---
    StatusBar,
    SplashScreen,
    ScreenOrientation,
    ThreeDeeTouch,
    SQLite,
    Vibration,
    HomeContoller,
    {provide: ErrorHandler, useClass: IonicErrorHandler}


  ]
})
export class AppModule {
}
