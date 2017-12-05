import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {LoginPage} from './login';
import {FormsModule} from "@angular/forms";
import {IonicStorageModule} from "@ionic/storage";

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    FormsModule,
  ],
})
export class LoginPageModule {
}
