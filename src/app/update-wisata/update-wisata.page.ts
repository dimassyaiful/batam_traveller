import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, AlertController, IonicModule } from '@ionic/angular';
import 'rxjs';

//provider
import { TempatwisataService } from '../tempatwisata.service';

@Component({
  selector: 'app-update-wisata',
  templateUrl: './update-wisata.page.html',
  styleUrls: ['./update-wisata.page.scss'],
})
export class UpdateWisataPage implements OnInit {
 //inisialisasi
 nama_tempat: String = null;
 alamat: String = null;
 kategori: String = null;
 foto_tempat: String = null;
 jam_buka: String = null;
 jam_tutup: String = null;
 id_update: String = null;

 data_load = [];

 constructor(public navCtrl: NavController, public TempatWisata_Provider:TempatwisataService,
   private modalCtrl:ModalController,private alertCtrl: AlertController) { 
    this.id_update = this.TempatWisata_Provider.id_update_data;
    this.load_data_update(this.id_update); 
    console.log(this.id_update) }

 ngOnInit() {
  
 }

 load_data_update(id_update){
  this.TempatWisata_Provider.load_data_update(id_update).subscribe((result) =>{
    console.log(result['_body']);
    this.data_load= JSON.parse(result['_body']);
    console.log(this.data_load); 

    this.nama_tempat = this.data_load[0]['nama_tempat'];
    this.alamat = this.data_load[0]['alamat'];;
    this.kategori = this.data_load[0]['kategori'];;
    this.foto_tempat = this.data_load[0]['foto_tempat'];;
    this.jam_buka = this.data_load[0]['jam_buka'];;
    this.jam_tutup = this.data_load[0]['jam_tutup'];;
   });
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

   if(this.nama_tempat == null|| this.alamat == null || this.kategori == null || this.jam_buka == null || this.jam_tutup== null){
     this.alert('Maaf!',"mohon isi semua field"); 
   }else{
     var data={ //array yang mau kita lempar ke db
       "id_tempat":this.id_update,
       "nama_tempat":this.nama_tempat,
       "alamat":this.alamat,
       "kategori":this.kategori,
       "foto_tempat":"tempat.jpg",
       "jam_buka":this.jam_buka,
       "jam_tutup":this.jam_tutup,
     }

     console.log(data);

     //fungsi save
     this.TempatWisata_Provider.update(data).subscribe((result)=>{
       console.log("Stage 3 -  Berhasil Return API");
       var return_msg: any =  result['_body']; //ambil return dari server
       console.log(return_msg);

       if(return_msg='1'){
         this.alert('Berhasil!',"Data Berhasil DiUpdate");
         this.goback();
       }else{
         this.alert('Gagal!',"Maaf data Gagal dimasukan"); 
         console.log(return_msg); //ini biar aja untuk debug error gagalnya
       }
     })
   }
 }

 goback(){
   this.navCtrl.goBack();
 }
}
