import {Component} from '@angular/core';
import {ModalController, NavController, NavParams} from 'ionic-angular';
import {ProfilePage} from "../profile/profile";

/**
 * Generated class for the MyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-my',
  templateUrl: 'my.html',
})
export class MyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyPage');
  }


  viewSelfDetial(userId: string) {
    this.modalCtrl.create(ProfilePage).present();
  }

}
