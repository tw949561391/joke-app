// import { FormBuilder, FormControl, Validator } from '@angular/forms';
import {Component} from '@angular/core';
import {AlertController, App, IonicPage, LoadingController, ViewController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login-slider',
  templateUrl: 'login-slider.html',
})
export class LoginSliderPage {

  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public app: App,
    public viewCtrl:ViewController
  ) {
  }

}
