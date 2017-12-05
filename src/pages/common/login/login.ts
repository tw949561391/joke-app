import {Component} from '@angular/core';
import {AlertController, IonicPage, LoadingController, ToastController, ViewController} from 'ionic-angular';
import OauthService from "../../../services/common/OauthService";
import {Loading} from "ionic-angular/components/loading/loading";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [OauthService]
})
export class LoginPage {

  username: string = '17621226380';
  password: string = 'tristan201314';


  constructor(public viewCtrl: ViewController,
              public toast: ToastController,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController,
              public oauthService: OauthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    var loading: Loading = this.loadingCtrl.create({content: '正在登陆...'});
    loading.present();
    this.oauthService.authorized(this.username, this.password)
      .then((profile) => {
        this.alertCtrl.create({
          title: '登陆成功',
          subTitle: '欢迎登陆',
          buttons: [{
            text: '确认', handler: () => {
              loading.dismiss()
              this.viewCtrl.dismiss(profile);
            }
          }]
        }).present();
      })
      .catch((e) => {
        this.toast.create({message: e.message}).present();
      });
  }

}
