
import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, AlertController, IonicModule } from '@ionic/angular';
import 'rxjs';

//provider
import { TempatwisataService } from '../tempatwisata.service';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  
  constructor(public actionSheetController: ActionSheetController, public navCtrl: NavController, public TempatWisata_Provider:TempatwisataService,
    private modalCtrl:ModalController,private alertCtrl: AlertController) {
      this.loaddata(); }

    data_load = []; ///array untuk nampung data

    ngOnInit() {
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
}
