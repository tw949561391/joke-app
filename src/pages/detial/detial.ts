import {Component} from '@angular/core';
import {IonicPage, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the DetialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detial',
  templateUrl: 'detial.html',
})
export class DetialPage {

  item: any = {}

  constructor(public navParams: NavParams, public viewCtrl: ViewController) {
    this.item = navParams.data;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetialPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
