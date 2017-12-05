import {Injectable} from "@angular/core";
import {Storage} from "@ionic/storage";

@Injectable()
export default class AppConfigService {
  constructor(private storage: Storage) {
  }


}

export class AppCinfig {
  isForstBoot: boolean;




}
