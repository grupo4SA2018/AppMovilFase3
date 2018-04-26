import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransferPatientPage } from './transfer-patient';

@NgModule({
  declarations: [
    TransferPatientPage,
  ],
  imports: [
    IonicPageModule.forChild(TransferPatientPage),
  ],
})
export class TransferPatientPageModule {}
