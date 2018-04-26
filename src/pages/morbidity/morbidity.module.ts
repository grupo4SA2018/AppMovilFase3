import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MorbidityPage } from './morbidity';

@NgModule({
  declarations: [
    MorbidityPage,
  ],
  imports: [
    IonicPageModule.forChild(MorbidityPage),
  ],
})
export class MorbidityPageModule {}
