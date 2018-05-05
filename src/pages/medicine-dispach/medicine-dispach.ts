import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';

/**
 * Generated class for the MedicineDispachPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-medicine-dispach',
  templateUrl: 'medicine-dispach.html',
})
export class MedicineDispachPage {

  medicine;
  url;
  data;

  constructor(public navCtrl: NavController, public navParams: NavParams, public serviceProvider: ServicesProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicineDispachPage');
  }

  getDispach() {
    let data = {
      Receta: this.medicine
    };

    console.log(this.url);

    this.serviceProvider.dispachMedicine(this.url, data, ok => {
      this.data = ok;
    }, err => {
      console.log(err);
      this.data = err;
    });
  }

}
