import {Component} from '@angular/core';
import {ModalController, NavController, NavParams, Refresher, ToastController} from 'ionic-angular';
import OauthService from "../../services/common/OauthService";
import {ProfilePage} from "../profile/profile";
import SelfProfileService from "../../services/self/SelfProfileService";

/**
 * Generated class for the MyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-my',
  templateUrl: 'my.html',
  providers: [SelfProfileService, OauthService]
})

export class MyPage {

  private profile: any;

  constructor(private toastCtrl: ToastController,
              public selfProfileService: SelfProfileService,
              public modalCtrl: ModalController) {
  }

  ionViewWillEnter() {
    this.init().then(() => {
      console.log('ok')
    }).catch(console.error)
  }

  async init() {
    this.profile = await this.selfProfileService.selfProfile();
  }
  doRefresh(refresher: Refresher) {
    this.init().then(() => {
      refresher.complete()
    }).catch((e) => {
      refresher.complete()
      console.error(e)
    })
  }

  ionViewDidEnter() {
    console.log('did enter')
  }

  ionViewDidLoad() {

  }

  toLogin() {
    let modal = this.modalCtrl.create('LoginPage');
    modal.present();
    modal.onDidDismiss((profile) => {
      this.profile = profile;
    })
  }

  viewSelfDetial(userId: string) {
    let modal = this.modalCtrl.create(ProfilePage);
    modal.present();
  }
}
