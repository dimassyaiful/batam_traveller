import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, AlertController, IonicModule } from '@ionic/angular';
import 'rxjs';

//provider
import { TempatwisataService } from '../tempatwisata.service';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-data-wisata',
  templateUrl: './data-wisata.page.html',
  styleUrls: ['./data-wisata.page.scss'],
})
export class DataWisataPage implements OnInit {

  constructor(public actionSheetController: ActionSheetController, public navCtrl: NavController, public TempatWisata_Provider:TempatwisataService,
    private modalCtrl:ModalController,private alertCtrl: AlertController) {this.loaddata(); }

    data_load = []; ///array untuk nampung data

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

  
  async presentActionSheet(id_tempat) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Data Tempat Wisata',
      buttons: [{
        text: 'Edit',
        icon: 'create',
        handler: () => {
          this.goto_edit(id_tempat);
          console.log('Edit : '+id_tempat);
        }
      }, {
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.hapus(id_tempat);
          console.log('Hapus : '+id_tempat);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

loaddata() {
  this.TempatWisata_Provider.load().subscribe((result) =>{
  this.data_load= JSON.parse(result['_body']);
  console.log(this.data_load); //untuk debugging aja
 });
}

doRefresh(event) { //untuk refresh halaman
  console.log('Mulai Refresh');
  this.loaddata(); //pas ditarik jalanin load data
  setTimeout(() => {
    console.log('Refresh Selesai');
    event.target.complete();
  }, 2000);
}

goto_tambah(){
  this.navCtrl.navigateForward('tambah_wisata');
}

goto_edit(id_tempat:String){
  this.TempatWisata_Provider.id_update_data = id_tempat;
  this.navCtrl.navigateForward('update-wisata');
}

hapus(id_tempat:String){
  this.TempatWisata_Provider.id_hapus = id_tempat;
  //fungsi hapus
  this.TempatWisata_Provider.hapus(id_tempat).subscribe((result)=>{
    console.log("Stage 3 -  Berhasil Return API");
    var return_msg: any =  result['_body']; //ambil return dari server
    console.log(return_msg);

    if(return_msg='1'){
      this.alert('Berhasil!',"Data Berhasil Dihapus");
      this.loaddata();
    }else{
      this.alert('Gagal!',"Maaf data Gagal dihapus"); 
      console.log(return_msg); //ini biar aja untuk debug error gagalnya
      }
    })
  }



}
