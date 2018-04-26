import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PacientHistoryPage } from './pacient-history';

@NgModule({
  declarations: [
    PacientHistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(PacientHistoryPage),
  ],
})
export class PacientHistoryPageModule {}
