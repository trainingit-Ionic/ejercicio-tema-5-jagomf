import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginModalComponent } from '../../../components/login-modal/login-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  isLogged = false;

  constructor(public modalController: ModalController) {}

  async launchLogin() {
    const modal = await this.modalController.create({
      component: LoginModalComponent,
      componentProps: { value: 123 }
    });
    await modal.present();

    const { data: { success } } = await modal.onDidDismiss();
    this.isLogged = !!success;
  }
}
