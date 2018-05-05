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
  total;
  data2;

  constructor(public navCtrl: NavController, public navParams: NavParams, public serviceProvider: ServicesProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MorbidityPage');
  }

  getReport() {
    this.serviceProvider.getMorbidity(ok => {
      console.log(ok.diagnostico);
      this.data = ok.diagnostico;

      this.serviceProvider.getMorbidity2(ok2=>{
        this.data2 = ok2.diagnostico;

        this.total = ok.diagnostico.concat(ok2.diagnostico)
      }, err=>{
        console.log(err);
      });

    }, err => {
      console.log(err);
      this.data = err;
    });
  }

}
