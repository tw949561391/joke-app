import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetialPage } from './detial';
import {PipesModule} from "../../pipes/pipes.module";

@NgModule({
  declarations: [
    DetialPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(DetialPage),
  ],
})
export class DetialPageModule {}
