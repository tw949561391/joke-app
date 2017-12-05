import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import AppConfig from "../app.config";
import OauthService from "./common/OauthService";

@Injectable()
export default class JokeService {

  constructor(private http: HttpClient,
              public oauthService: OauthService) {

  }

  public async list(params: any): Promise<any> {
    let headers = await this.oauthService.getOauthHeader();
    return this.http.post(`${AppConfig.HOST_DOMAIN}/server/jokes/list.json`, params, {headers: headers}).toPromise();
  }
}
