import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import OauthService from "../common/OauthService";
import AppConfig from "../../app.config";

@Injectable()
export default class SelfProfileService {
  constructor(private http: HttpClient,
              private oauth: OauthService) {
  }

  async selfProfile() {
    if (this.oauth.isLogin()) {
      console.log('已经登陆')
      let headers: HttpHeaders = await this.oauth.getOauthHeader();
      return await this.http.get(AppConfig.HOST_ID + "/server/self/identity.json", {headers: headers}).toPromise()
    } else {
      return null;
    }
  }

}
