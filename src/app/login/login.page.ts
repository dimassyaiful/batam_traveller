//import { Component, OnInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, AlertController, IonicModule } from '@ionic/angular';
import 'rxjs';

//provider
import { UserService } from '../user.service';
 

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  col1: String;
  col2: String;

  constructor(public navCtrl: NavController, public userProvider:UserService,
    private modalCtrl:ModalController,private alertCtrl: AlertController) {}

  ngOnInit() {
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



  login(){
    console.log("Stage 1 -  Masuk Fungsi Login");
    var data={ //array yang mau kita lempar ke db
      "col1":this.col1,
      "col2":this.col2
    }
    console.log(data);

    //fungsi save
    this.userProvider.login(data).subscribe((result)=>{
      console.log("Stage 3 -  Berhasil Return API");
      var return_msg: any =  result['_body']; //ambil return dari server
      console.log(return_msg);
      if(return_msg==1){
        this.userProvider.session='admin';
        this.alert('Berhasil!',"Berhasil Login");
        this.navCtrl.navigateForward('home');
      }else{
        this.alert('Gagal!',"Maaf Gagal Login"); 
        console.log(return_msg); //ini biar aja untuk debug error gagalnya
      }
    })
  }

  goback(){
    this.navCtrl.goBack();
  }
  
}

