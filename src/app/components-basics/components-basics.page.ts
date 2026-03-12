import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonItemDivider, IonLabel, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonItem, IonInput, IonCheckbox, IonToggle, IonRange, IonIcon, IonNote } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { volumeLow, volumeHigh, person, settings, helpCircle } from 'ionicons/icons';

@Component({
  selector: 'app-components-basics',
  templateUrl: './components-basics.page.html',
  styleUrls: ['./components-basics.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton,
    IonItemDivider, IonLabel, IonButton, IonCard, IonCardHeader,
    IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonItem,
    IonInput, IonCheckbox, IonToggle, IonRange, IonIcon, IonNote,
    CommonModule, FormsModule
  ]
})
export class ComponentsBasicsPage implements OnInit {

  constructor() {
    addIcons({ volumeLow, volumeHigh, person, settings, helpCircle });
  }

  ngOnInit() {
  }

}
