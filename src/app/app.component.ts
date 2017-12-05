import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {HomeNav} from "../pages/nav/nav";
import {ScreenOrientation} from "@ionic-native/screen-orientation";
import {ThreeDeeTouch} from "@ionic-native/three-dee-touch";
import OauthService from "../services/common/OauthService";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage: any = HomeNav;

  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public  screenOrientation: ScreenOrientation,
              public splashScreen: SplashScreen) {
    this.initializeAppPlugins();
  }

  initializeAppPlugins() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      if (this.platform.is('ios')) {
      }
      if (this.platform.is('android')) {

        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        this.statusBar.backgroundColorByHexString("#FDDA04");
      }
      this.splashScreen.hide();
    });
  }

}



