import {EventEmitter, Injectable} from "@angular/core";

@Injectable()
export default class HomeContoller {
  scrollUp: EventEmitter<void> = new EventEmitter();

  constructor() {
    console.log('HomeContoller init');
  }

  scrollToUp(){
    this.scrollUp.next();
  }
}
