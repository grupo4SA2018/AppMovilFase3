import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

/*
  Generated class for the ServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicesProvider {

  constructor(public http: HttpClient, public toastCtrl: ToastController) {
    console.log('Hello ServicesProvider Provider');
  }

  transferPacient(data, success, error) {
    this.http.post('', data, { observe: 'response' }).subscribe(data => {
      success(data);
    }, err => {
      error(err);
    });
  }

  consultExistence(data, success, error) {
    this.http.post('', data, { observe: 'response' }).subscribe(data => {
      success(data);
    }, err => {
      error(err);
    });
  }

  transferMedicine(data, success, error) {
    this.http.post('', data, { observe: 'response' }).subscribe(data => {
      success(data);
    }, err => {
      error(err);
    });
  }

  dispachMedicine(data, success, error) {
    this.http.post('', data, { observe: 'response' }).subscribe(data => {
      success(data);
    }, err => {
      error(err);
    });
  }

  pacientHistory(data, success, error) {
    this.http.post('', data, { observe: 'response' }).subscribe(data => {
      success(data);
    }, err => {
      error(err);
    });
  }

  getMorbidity(success, error) {
    this.http.get('', { observe: 'response' }).subscribe(data => {
      success(data);
    }, err => {
      error(err);
    });
  }

  presentToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 5000,
      position: 'top'
    });
    toast.onDidDismiss(() => {
    });
    toast.present();
  }

}


