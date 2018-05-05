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

  transferPacient(url, data, success, error) {
    this.http.post(url, data, { observe: 'response' }).subscribe(data => {
      success(data);
    }, err => {
      error(err);
    });
  }

  consultExistence(url, data, success, error) {
    this.http.post(url, data, { observe: 'response' }).subscribe(data => {
      success(data);
    }, err => {
      error(err);
    });
  }

  transferMedicine(url, data, success, error) {
    this.http.post(url, data, { observe: 'response' }).subscribe(data => {
      success(data);
    }, err => {
      error(err);
    });
  }

  dispachMedicine(url, data, success, error) {
    this.http.post(url, data, { observe: 'response' }).subscribe(data => {
      success(data);
    }, err => {
      error(err);
    });
  }

  pacientHistory(url, data, success, error) {
    this.http.post(url, data, { observe: 'response' }).subscribe(data => {
      success(data);
    }, err => {
      error(err);
    });
  }

  getMorbidity(success, error) {
    this.http.post('http://testgrupo4.cloudhub.io/Servicios/Morbilidad', { observe: 'response' }).subscribe(data => {
      success(data);
    }, err => {
      error(err);
    });
  }

  getMorbidity2(success, error) {
    this.http.post('http://192.168.43.243:8081/morb', { observe: 'response' }).subscribe(data => {
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


