import {Component, ViewChild} from "@angular/core";
import {HomePage} from "../home/home";
import {MyPage} from "../my/my";
import {Vibration} from "@ionic-native/vibration";
import {ChatPage} from "../chat/chat";

@Component({
  template: `
    <ion-tabs color="primary" no-border>
      <ion-tab tabIcon="home" [root]="homePage" tabTitle="主页" (ionSelect)="onSelect()"></ion-tab>
      <ion-tab tabIcon="chatbubbles" [root]="chatPage" tabTitle="消息"></ion-tab>
      <ion-tab tabIcon="person" [root]="myPage" tabTitle="我"></ion-tab>
    </ion-tabs>`
})
export class HomeNav {
  public homePage = HomePage;
  public chatPage = ChatPage;
  public myPage = MyPage;

  constructor(private vibration: Vibration) {

  }


  ionViewDidLoad() {
  }

  onSelect() {
     // this.vibration.vibrate(50);
  }

}
