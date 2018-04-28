import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';

/**
 * Generated class for the TransferPatientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transfer-patient',
  templateUrl: 'transfer-patient.html',
})
export class TransferPatientPage {

  origen;
  destino;
  paciente;

  constructor(public navCtrl: NavController, public navParams: NavParams, public serviceProvider: ServicesProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransferPatientPage');
  }

  traslate() {
    let data = {
      Origen: this.origen,
      Destino: this.destino,
      Paciente: this.paciente
    }

    this.serviceProvider.transferPacient(data, ok => {

    }, err => {
      console.log(err);
    })

  }

}
