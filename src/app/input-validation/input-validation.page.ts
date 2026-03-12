import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonInput, IonNote, IonText, IonButton, IonButtons, IonBackButton, IonIcon, IonCard, IonCardContent, AlertController } from '@ionic/angular/standalone';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { mailOutline, personOutline, lockClosedOutline, checkmarkCircleOutline, alertCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-input-validation',
  templateUrl: './input-validation.page.html',
  styleUrls: ['./input-validation.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem,
    IonInput, IonNote, IonText, IonButton, IonButtons,
    IonBackButton, IonIcon, IonCard, IonCardContent, CommonModule,
    ReactiveFormsModule
  ]
})
export class InputValidationPage implements OnInit {
  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private alertController: AlertController
  ) {
    addIcons({ mailOutline, personOutline, lockClosedOutline, checkmarkCircleOutline, alertCircleOutline });

    // Initialize the form with validators
    this.userForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() { }

  // Helper method to check if a field is invalid and touched
  isInvalid(field: string) {
    const control = this.userForm.get(field);
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }

  // Get specific error message
  getErrorMessage(field: string) {
    const control = this.userForm.get(field);
    if (control?.hasError('required')) return 'This field is required';
    if (control?.hasError('email')) return 'Please enter a valid email address';
    if (control?.hasError('minlength')) {
      const requiredLength = control.errors?.['minlength'].requiredLength;
      return `Minimum length is ${requiredLength} characters`;
    }
    return '';
  }

  async onSubmit() {
    if (this.userForm.valid) {
      console.log('Form Submitted!', this.userForm.value);

      const alert = await this.alertController.create({
        header: 'Success',
        message: 'Account created successfully!',
        buttons: ['OK']
      });

      await alert.present();
      this.userForm.reset();
    } else {
      const alert = await this.alertController.create({
        header: 'Validation Error',
        message: 'Please check your information and try again.',
        buttons: ['Dismiss']
      });

      await alert.present();
    }
  }
}
