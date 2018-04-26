import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = 'DashboardPage';
  pages: Array<{ title: string, component: any, icon: any }>;
  @ViewChild('content') nav: Nav;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    this.pages = [
      { title: "Inicio", component: "DashboardPage", icon: 'add' },
      { title: "Despacho Medicina", component: "MedicineDispachPage", icon: 'add' },
      { title: "Morbilidad", component: "MorbidityPage", icon: 'add' },
      { title: "Historial de paciente", component: "PacientHistoryPage", icon: 'add' },
      { title: "Transferir medicamento", component: "TransferMedicinePage", icon: 'add' },
      { title: "Transferir Paciente", component: "TransferPatientPage", icon: 'add' }
    ]
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  setPage(page) {
    this.nav.setRoot(page);
  }
}

