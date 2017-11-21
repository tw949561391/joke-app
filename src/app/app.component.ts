import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {ProfilePage} from "../pages/profile/profile";
import {HomeNav} from "../pages/nav/nav";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomeNav;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomeNav },
      { title: 'List', component: ProfilePage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      if(this.platform.is('android')){
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString("#FDDA04");
      }
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}



