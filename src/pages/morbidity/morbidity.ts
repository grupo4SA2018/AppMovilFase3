import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';

/**
 * Generated class for the MorbidityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-morbidity',
  templateUrl: 'morbidity.html',
})
export class MorbidityPage {

  data;
  url;

  constructor(public navCtrl: NavController, public navParams: NavParams, public serviceProvider: ServicesProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MorbidityPage');
  }

  getReport() {
    this.serviceProvider.getMorbidity(this.url, ok => {
      console.log(ok);
      this.data = ok;

    }, err => {
      console.log(err);
      this.data = err;
    });
  }

}
