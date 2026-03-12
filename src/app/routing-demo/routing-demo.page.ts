import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonButton, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardContent, AlertController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { notificationsOutline, rocketOutline } from 'ionicons/icons';

@Component({
  selector: 'app-routing-demo',
  templateUrl: './routing-demo.page.html',
  styleUrls: ['./routing-demo.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, IonButtons,
    IonBackButton, IonButton, IonIcon, IonCard, IonCardHeader,
    IonCardTitle, IonCardContent, CommonModule
  ]
})
export class RoutingDemoPage implements OnInit {

  constructor(private alertController: AlertController) {
    addIcons({ notificationsOutline, rocketOutline });
  }

  ngOnInit() { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Native Alert',
      subHeader: 'Controller Component',
      message: 'This alert was created using AlertController. It matches the native platform look!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => { console.log('Alert canceled'); }
        },
        {
          text: 'Action',
          role: 'confirm',
          handler: () => { console.log('Alert confirmed'); }
        }
      ]
    });

    await alert.present();
  }
}
