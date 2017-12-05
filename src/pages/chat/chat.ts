import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  chats = [{
    imageUrl: 'assets/demo/img/avatar/cosima-avatar.jpg',
    title: 'McFly',
    lastMessage: 'Hey, what happened yesterday?',
    timestamp: new Date()
  },
    {
      imageUrl: 'assets/demo/img/avatar/girl-avatar.png',
      title: 'Venkman',
      lastMessage: 'Sup, dude ss',
      timestamp: new Date()
    },

    {
      imageUrl: 'assets/demo/img/avatar/ian-avatar.png',
      title: 'Sarah Mcconnor',
      lastMessage: 'You still ow me that pizza.',
      timestamp: new Date()
    }];

  viewMessages(chat) {
    this.navCtrl.push('MessagesPage', { chatId: chat.id });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }
}

