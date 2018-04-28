import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Alert } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';

/**
 * Generated class for the TransferMedicinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transfer-medicine',
  templateUrl: 'transfer-medicine.html',
})
export class TransferMedicinePage {

  origen;
  destino;
  medicamentos = [];
  medicines;

  constructor(public navCtrl: NavController, public navParams: NavParams, public serviceProvider: ServicesProvider, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransferMedicinePage');
  }


  traslate() {
    let data = {
      Origen: this.origen,
      Destino: this.destino,
      Medicamentos: this.medicamentos
    };

    this.serviceProvider.transferMedicine(data, ok => {

    }, err => {
      console.log(err);
    });
  }

  pushMedicine() {
    let prompt = this.alertCtrl.create({
      title: 'Medicamento',
      message: "Ingresa los datos del medicamento",
      inputs: [
        {
          name: 'codigo',
          placeholder: 'Codigo'
        },
        {
          name: 'cantidad',
          placeholder: 'Cantidad'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.medicamentos.push({ Codigo: data.codigo, Cantidad: data.cantidad });
          }
        }
      ]
    });
    prompt.present();
  }

}
