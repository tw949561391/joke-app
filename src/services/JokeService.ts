import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import AppConfig from "../app.config";

@Injectable()
export default class JokeService {

  constructor(private http: HttpClient) {

  }
  public list(params: any) {
    return this.http.post(AppConfig.HOST_DOMAIN + "/server/jokes/list.json", params);
  }
}
