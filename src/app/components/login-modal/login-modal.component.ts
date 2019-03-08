import { Component, ViewChild } from '@angular/core';
import { ModalController, IonInput, ToastController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  providers: [AuthService],
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent {
  @ViewChild('user') userField: IonInput;
  @ViewChild('pass') passField: IonInput;

  isLogging = false;

  constructor(
    private authService: AuthService,
    public toastController: ToastController,
    public modalController: ModalController
  ) { }

  async tryLogin() {
    if (this.userField.value && this.passField.value) {
      this.isLogging = true;
      const username = this.userField.value;
      const password = this.passField.value;
      this.authService.login({ username, password }).subscribe(async success => {
        if (success) {
          this.modalController.dismiss();
        } else {
          const toast = await this.toastController.create({
            message: 'Could not login!',
            duration: 4000,
            cssClass: 'toaster'
          });
          toast.present();
        }
        this.isLogging = false;
      });
    }
  }

  dismiss() {
    this.modalController.dismiss();
  }

}
