import {Component} from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import JokeService from "../../services/JokeService";
import HomeContoller from "./home-contoller";
import {ProfilePage} from "../profile/profile";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HomeContoller, JokeService]
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

  constructor(public navCtrl: NavController,
              public ModalCtrl: ModalController,
              public jokeService: JokeService) {
    this.jokeService.list({pagework: this.pagework, sort: this.sort}).subscribe((res: any) => {
      res.forEach(item => {
        this.items.push(item);
      })
    })
  }


  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    setTimeout(() => {
      refresher.complete();
    }, 2000);
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

  viewPerson(userId: string) {
    this.ModalCtrl.create(ProfilePage, {userId: userId}, {showBackdrop: true}).present({
      isNavRoot: true,
      disableApp: true
    });
  }

  viewDetial(item:any) {
    this.ModalCtrl.create("DetialPage",item).present();
  }
}

