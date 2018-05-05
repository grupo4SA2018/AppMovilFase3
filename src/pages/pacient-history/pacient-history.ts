import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';

/**
 * Generated class for the PacientHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pacient-history',
  templateUrl: 'pacient-history.html',
})
export class PacientHistoryPage {

  pacient;
  url;
  data;

  constructor(public navCtrl: NavController, public navParams: NavParams, public serviceProvider: ServicesProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PacientHistoryPage');
  }

  getHistory() {
    let data = {
      DPI: this.pacient
    };

    this.serviceProvider.pacientHistory(this.url, data, ok => {
      console.log(ok);
      this.data = ok;
    }, err => {
      console.log(JSON.parse(err.error.text));
      this.data = err;
      /* let datos = JSON.parse(err.error.text);
      console.log(datos); */
    })
  }

}
