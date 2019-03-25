import { Component, ViewChild, OnInit } from '@angular/core';

import { Platform, IonMenu } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  @ViewChild('menu') menu: IonMenu;

  constructor(
    private authService: AuthService,
    private router: Router,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  showMenu = false;

  ngOnInit() {
    this.authService.isLogged.subscribe(logged => this.showMenu = logged);
  }

  tryLogout() {
    this.menu.close().then(() => {
      this.authService.logout();
      this.router.navigate(['/']);
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
