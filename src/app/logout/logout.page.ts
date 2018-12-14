import { Component, OnInit } from '@angular/core';
import { NavController, AlertController} from '@ionic/angular';

//provider
import { UserService } from '../user.service';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(public navCtrl:NavController, public alertCtrl: AlertController, public userprov: UserService,public appcomp: AppComponent) { 
    this.logout();
  }

    //untuk show alert
    async alert(title,msg) {
      const alert = await this.alertCtrl.create({
        header: title,
        message: msg,
        buttons: ['OK']
      });
  
      await alert.present();
    }

  public logout(){
    this.userprov.session='0';
    this.alert('Berhasil!',"Berhasil Logout");
    this.appcomp.initializeApp();
    this.navCtrl.navigateForward('home');
  }

  ngOnInit() {
  }

}
