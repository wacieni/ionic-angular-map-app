import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonIcon, IonGrid, IonRow, IonCol, IonSearchbar, IonFab, IonFabButton, IonChip, IonLabel, IonAvatar, IonButtons, IonMenuButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowForwardOutline, searchOutline, menuOutline, locateOutline, addOutline, removeOutline, layersOutline, star, mapOutline, listOutline, checkmarkCircleOutline, settingsOutline, personCircleOutline } from 'ionicons/icons';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader, IonToolbar, IonContent, IonCard, IonCardHeader,
    IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonIcon,
    IonGrid, IonRow, IonCol, IonSearchbar, IonFab, IonFabButton,
    IonChip, IonLabel, IonAvatar, IonButtons, IonMenuButton,
    RouterModule
  ],
})
export class HomePage {
  constructor() {
    addIcons({
      arrowForwardOutline, searchOutline, menuOutline, locateOutline,
      addOutline, removeOutline, layersOutline, star, mapOutline, listOutline,
      checkmarkCircleOutline, settingsOutline, personCircleOutline
    });
  }
}
