import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';
/**
 * Generated class for the ConsultExistencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consult-existence',
  templateUrl: 'consult-existence.html',
})
export class ConsultExistencePage {

  medicine;

  constructor(public navCtrl: NavController, public navParams: NavParams, public serviceProvider: ServicesProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultExistencePage');
  }

  consult() {
    let data = {
      Codigo: this.medicine
    };

    this.serviceProvider.consultExistence(data, ok => {

    }, err => {
      console.log(err);
    });
  }

}
