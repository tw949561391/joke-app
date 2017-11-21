import {Component, ViewChild} from '@angular/core';
import {App, Content, LoadingController, ModalController, NavController} from 'ionic-angular';
import JokeService from "../../services/JokeService";
import HomeContoller from "./home-contoller";
import {ProfilePage} from "../profile/profile";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [JokeService]
})
export class HomePage {
  items = [];
  pagework: any = {
    pageNum: 1,
    pageSize: 10
  };
  filter = {
    time_div: Date.now()
  };

  sort = {
    create_time: -1
  };


  @ViewChild(Content)
  public content: Content;


  constructor(public navCtrl: NavController,
              public ModalCtrl: ModalController,
              public homeCtrl: HomeContoller,
              public app: App,
              public jokeService: JokeService) {

  }

  ionViewDidLoad() {
    this.homeCtrl.scrollUp.subscribe(() => {
      this.scrollToTop();
    });
    this.jokeService.list({pagework: this.pagework, sort: this.sort}).subscribe((res: any) => {
      res.forEach(item => {
        this.items.push(item);
      })
    })
  }


  doRefresh(refresher) {
    setTimeout(() => {
      refresher.complete();
    }, 1000);
  }

  doInfinite(infiniteScroll) {
    this.pagework.pageNum++;
    this.jokeService.list({pagework: this.pagework, sort: this.sort}).subscribe((res: any) => {
      res.forEach(item => {
        this.items.push(item);
      });
      infiniteScroll.complete();
    });
  }

  viewPerson(userId: string, $event) {
    if ($event) {
      $event.stopPropagation();
    }
    this.ModalCtrl.create(ProfilePage, {userId: userId}, {showBackdrop: true}).present({
      isNavRoot: true,
      disableApp: true
    });
  }
  viewDetial(item: any) {
    this.app.getRootNav().push("DetialPage", item, function () {
      console.log("ok")
    });
  }

  scrollToTop() {
    this.content.scrollToTop(1000);
  }
}


