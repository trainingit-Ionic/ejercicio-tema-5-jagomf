import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginModalComponent } from '../../../components/login-modal/login-modal.component';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  get isLogged() {
    return this.authService.isLogged();
  }

  constructor(
    private authService: AuthService,
    public modalController: ModalController
  ) {}

  async launchLogin() {
    const modal = await this.modalController.create({
      component: LoginModalComponent,
      componentProps: { value: 123 }
    });
    await modal.present();
  }
}
