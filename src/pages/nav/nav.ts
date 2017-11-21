import {Component, ViewChild} from "@angular/core";
import {HomePage} from "../home/home";
import {MyPage} from "../my/my";
import {Tabs} from "ionic-angular/navigation/nav-interfaces";
import HomeContoller from "../home/home-contoller";

@Component({
  template: `
    <ion-tabs color="primary" #tabs>
      <ion-tab tabIcon="home" [root]="homePage" tabTitle="主页"></ion-tab>
      <ion-tab tabIcon="chatbubbles" [root]="homePage" tabTitle="消息"></ion-tab>
      <ion-tab tabIcon="person" [root]="myPage" tabTitle="我"></ion-tab>
    </ion-tabs>`
})
export class HomeNav {
  public homePage = HomePage;
  public myPage = MyPage;

  @ViewChild("tabs")
  tabs: Tabs;

  constructor(private homeCtrl: HomeContoller) {
  }


}
