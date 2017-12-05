import {Component, ViewChild} from '@angular/core';
import {App, Content, ModalController, NavController, Refresher} from 'ionic-angular';
import JokeService from "../../services/JokeService";
import HomeContoller from "./home-contoller";
import {ProfilePage} from "../profile/profile";
import OauthService from "../../services/common/OauthService";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [JokeService, OauthService]
})
export class HomePage {
  items = [];
  pagework: any = {
    pageNum: 1,
    pageSize: 10
  };

  filter = {
    create_time: {
      $lte: Date.now()
    }
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

    this.init().then(() => {
      console.log('success')
    })
  }
  ionViewDidLoad() {
  }
  async init() {
    this.filter.create_time.$lte = Date.now();
    this.pagework.pageNum = 1;
    let res: Array<any> = await this.jokeService.list({pagework: this.pagework, sort: this.sort, filter: this.filter});
    this.items = []
    res.forEach((item) => {
      this.items.push(item);
    })
  }


  doRefresh(refresher: Refresher) {
    this.init().then(() => {
      refresher.complete();
    }).catch((e) => {
      console.log(e)
    })
  }

  doInfinite(infiniteScroll) {
    this.pagework.pageNum++;
    this.jokeService.list({pagework: this.pagework, sort: this.sort, filter: this.filter}).then((res: any) => {
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


