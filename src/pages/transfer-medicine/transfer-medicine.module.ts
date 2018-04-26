import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransferMedicinePage } from './transfer-medicine';

@NgModule({
  declarations: [
    TransferMedicinePage,
  ],
  imports: [
    IonicPageModule.forChild(TransferMedicinePage),
  ],
})
export class TransferMedicinePageModule {}
