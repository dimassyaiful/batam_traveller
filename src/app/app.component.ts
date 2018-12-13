import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

//provider
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  public appPages = [];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public user_prov:UserService
  ) {
    console.log(this.appPages);
    this.initializeApp();
  }

  initializeApp() {
    var session = this.user_prov.session;
    if(session=='admin'){
      this.appPages = [{
        title: 'Home',
        url: '/home',
        icon: 'home'
      },{
        title: 'Tempat Wisata (Admin)',
        url: '/data-wisata',
        icon: 'map'
      },
      {
        title: 'Logout',
        url: '/logout',
        icon: 'log-out'
      }]
      console.log(this.appPages);
    }else{
      this.appPages = [
        {
          title: 'Home',
          url: '/home',
          icon: 'home'
        },
        {
          title: 'Login Admin',
          url: '/Login',
          icon: 'log-in'
        }
      ];
    }
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.show();
    });
  }
}
