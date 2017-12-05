import {Component} from '@angular/core';
import {ActionSheetController, IonicPage, NavParams, ViewController} from 'ionic-angular';

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


  talks: Array<any> = [
    {
      name: 'Tristan',
      avatar: 'https://ionicframework.com/dist/preview-app/www/assets/img/marty-avatar.png',
      createTime: new Date(Date.now() - 2319028),
      content: '每个人心中都有一座纪念碑谷，在这里，我从未长大，但从未停止成长。每个人成长的路上，会有欢呼雀跃，会有跌跌撞撞，会有喜怒哀乐。如果能给成长'
    },
    {
      name: 'Wendy',
      avatar: 'assets/demo/img/avatar/cosima-avatar.jpg',
      createTime: new Date(Date.now() - 2019000),
      content: '每个人心中都有一座纪念碑谷，在这里，我从未长大，但从未停止成长。每个人成长的路上，会有欢呼雀跃，会有跌跌撞撞，会有喜怒哀乐。如果能给成长'
    },
    {
      name: 'Leo',
      avatar: 'assets/demo/img/avatar/girl-avatar.png',
      createTime: new Date(Date.now() - 2118028),
      content: '每个人心中都有一座纪念碑谷，在这里，我从未长大，但从未停止成长。每个人成长的路上，会有欢呼雀跃，会有跌跌撞撞，会有喜怒哀乐。如果能给成长'
    },
    {
      name: 'HelloKitty',
      avatar: 'assets/demo/img/avatar/ian-avatar.png',
      createTime: new Date(Date.now() - 2417028),
      content: '每个人心中都有一座纪念碑谷，在这里，我从未长大，但从未停止成长。每个人成长的路上，会有欢呼雀跃，会有跌跌撞撞，会有喜怒哀乐。如果能给成长'
    },
    {
      name: '张三的小XXXXXX',
      avatar: 'assets/demo/img/avatar/marty-avatar.png',
      createTime: new Date(Date.now() - 2226028),
      content: '每个人心中都有一座纪念碑谷，在这里，我从未长大，但从未停止成长。每个人成长的路上，会有欢呼雀跃，会有跌跌撞撞，会有喜怒哀乐。如果能给成长'
    },
    {
      name: '未知的人类',
      avatar: 'assets/demo/img/avatar/sarah-avatar.jpg',
      createTime: new Date(Date.now() - 2215028),
      content: '每个人心中都有一座纪念碑谷，在这里，我从未长大，但从未停止成长。每个人成长的路上，会有欢呼雀跃，会有跌跌撞撞，会有喜怒哀乐。如果能给成长'
    }
  ];
  item: any = {}

  constructor(public navParams: NavParams,
              public actionSheetCtrl: ActionSheetController,
              public viewCtrl: ViewController) {
    this.item = navParams.data;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetialPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }


  doMore() {
    this.actionSheetCtrl.create({
      title: '更多',
      buttons: [
        {
          text: '收藏',
          role: 'destructive',
          icon: 'cube',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
        {
          text: '分享',
          icon: 'md-share',
          handler: () => {
            console.log('Archive clicked');
          }
        },
        {
          text: '举报',
          icon: 'alert',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '取消',
          role: 'cancel',
          icon: 'close',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    })
      .present()
  }


  doInfinite(infiniteScroll) {
    setTimeout(() => {
      [
        {
          name: 'Tristan',
          avatar: 'https://ionicframework.com/dist/preview-app/www/assets/img/marty-avatar.png',
          createTime: new Date(Date.now() - 2319028),
          content: '每个人心中都有一座纪念碑谷，在这里，我从未长大，但从未停止成长。每个人成长的路上，会有欢呼雀跃，会有跌跌撞撞，会有喜怒哀乐。如果能给成长'
        },
        {
          name: 'Tristan',
          avatar: 'assets/demo/img/avatar/cosima-avatar.jpg',
          createTime: new Date(Date.now() - 2019000),
          content: '每个人心中都有一座纪念碑谷，在这里，我从未长大，但从未停止成长。每个人成长的路上，会有欢呼雀跃，会有跌跌撞撞，会有喜怒哀乐。如果能给成长'
        },
        {
          name: 'Tristan',
          avatar: 'assets/demo/img/avatar/girl-avatar.png',
          createTime: new Date(Date.now() - 2118028),
          content: '每个人心中都有一座纪念碑谷，在这里，我从未长大，但从未停止成长。每个人成长的路上，会有欢呼雀跃，会有跌跌撞撞，会有喜怒哀乐。如果能给成长'
        },
        {
          name: 'Tristan',
          avatar: 'assets/demo/img/avatar/ian-avatar.png',
          createTime: new Date(Date.now() - 2417028),
          content: '每个人心中都有一座纪念碑谷，在这里，我从未长大，但从未停止成长。每个人成长的路上，会有欢呼雀跃，会有跌跌撞撞，会有喜怒哀乐。如果能给成长'
        },
        {
          name: 'Tristan',
          avatar: 'assets/demo/img/avatar/marty-avatar.png',
          createTime: new Date(Date.now() - 2226028),
          content: '每个人心中都有一座纪念碑谷，在这里，我从未长大，但从未停止成长。每个人成长的路上，会有欢呼雀跃，会有跌跌撞撞，会有喜怒哀乐。如果能给成长'
        },
        {
          name: 'Tristan',
          avatar: 'assets/demo/img/avatar/sarah-avatar.jpg',
          createTime: new Date(Date.now() - 2215028),
          content: '每个人心中都有一座纪念碑谷，在这里，我从未长大，但从未停止成长。每个人成长的路上，会有欢呼雀跃，会有跌跌撞撞，会有喜怒哀乐。如果能给成长'
        }
      ].forEach((t) => {
        this.talks.push(t)
      })
      infiniteScroll.complete();
    }, 3000)


  }
}
