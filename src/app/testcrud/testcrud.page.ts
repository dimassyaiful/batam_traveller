import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, AlertController, IonicModule } from '@ionic/angular';
import 'rxjs';

//provider
import { TestcrudProviderService } from '../testcrud-provider.service';
 

//halaman lainya
import { TestcrudLoadPage } from '../testcrud-load/testcrud-load.page';

@Component({
  selector: 'app-testcrud',
  templateUrl: './testcrud.page.html',
  styleUrls: ['./testcrud.page.scss'],
})
export class TestcrudPage implements OnInit {
  col1: String;
  col2: String;

  constructor(public navCtrl: NavController, public TestCrud_Provider:TestcrudProviderService,
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



  simpan(){
    console.log("Stage 1 -  Fungsi Simpan CRUD Running");
    var data={ //array yang mau kita lempar ke db
      "col1":this.col1,
      "col2":this.col2
    }
    console.log(data);

    //fungsi save
    this.TestCrud_Provider.tambah(data).subscribe((result)=>{
      console.log("Stage 3 -  Berhasil Return API");
      var return_msg: any =  result['_body']; //ambil return dari server
      
      if(return_msg=1){
        this.alert('Berhasil!',"Data Berhasil Ditambah");
        this.goback();
      }else{
        this.alert('Gagal!',"Maaf data Gagal dimasukan"); 
        console.log(return_msg); //ini biar aja untuk debug error gagalnya
      }
    })
  }

  goback(){
    this.navCtrl.goBack();
  }
  
}
