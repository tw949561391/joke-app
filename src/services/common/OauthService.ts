import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import AppConfig from "../../app.config";
import {Storage} from "@ionic/storage";

@Injectable()
export default class OauthService {
  constructor(public storage: Storage,
              private httpClient: HttpClient) {
  }

  async authorized(username, password) {
    let token: any = await this.httpClient.post(AppConfig.HOST_AUTH + '/server/oauth/hello.json',
      new HttpParams().append("username", username).append("password", password),
      {
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      }).toPromise();
    this.storage.set('token', token);
    return await this.httpClient.get(AppConfig.HOST_ID + "/server/self/identity.json", {headers: {"Authorization": "Bearer " + token.accessToken}}).toPromise()
  }




  async isLogin(): Promise<boolean> {
    let token = await this.storage.get('token');
    if (token) {
      return true;
    } else {
      return false;
    }
  }

  private async getAccessToken() {
    let token = await this.storage.get('token');
    if (token === null) {
      return null;
    }
    if (Date.now() < token.accessTokenExpiresAt) {
      return token.accessToken;
    }
    if (Date.now() >= token.refreshTokenExpiresAt) {
      await this.storage.remove('token');
      return null;
    }
    token = await this.refreshToken(token.refreshToken);
    this.storage.set('token', token);
    return token.accessToken;
  }

  async refreshToken(refreshToken?: string) {
    if (!refreshToken) {
      let oldToken = await this.storage.get('token');
      refreshToken = oldToken.refreshToken;
      console.log(oldToken)
    }
    let token: any = await this.httpClient.post(AppConfig.HOST_AUTH + '/server/oauth/hello.json',
      new HttpParams()
        .append("refresh_token", refreshToken)
        .append("auth_type", "refresh_token"),
      {
        headers: {
          'Content-Type':
            'application/x-www-form-urlencoded'
        }
      }
    ).toPromise();
    return token;
  }

  async getOauthHeader(): Promise<HttpHeaders> {
    const accessToken = await this.getAccessToken();
    if (accessToken) {
      return new HttpHeaders().append('Authorization', `Bearer ${accessToken}`);
    } else {
      return new HttpHeaders();
    }
  }
}
