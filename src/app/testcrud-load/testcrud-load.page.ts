import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, AlertController, IonicModule } from '@ionic/angular';
import { TestcrudProviderService } from '../testcrud-provider.service';
import 'rxjs';

//halaman lainya
import { TestcrudPage } from '../testcrud/testcrud.page';

@Component({
  selector: 'app-testcrud-load',
  templateUrl: './testcrud-load.page.html',
  styleUrls: ['./testcrud-load.page.scss'],
})
export class TestcrudLoadPage implements OnInit {

  constructor(public navCtrl: NavController, public TestCrud_Provider:TestcrudProviderService,
    private modalCtrl:ModalController,private alertCtrl: AlertController) {  
      //jalanin fungsi pas di load
      this.loaddata();  
    }
  
  data_load = []; ///array untuk nampung

  ngOnInit() {
  }

  doRefresh(event) { //untuk refresh halaman
    console.log('Mulai Refresh');
    this.loaddata(); //pas ditarik jalanin load data
    setTimeout(() => {
      console.log('Refresh Selesai');
      event.target.complete();
    }, 2000);
  }

  loaddata() {
    this.TestCrud_Provider.load().subscribe((result) =>{
    this.data_load= JSON.parse(result['_body']);
    console.log(this.data_load); //untuk debugging aja
   });
  }

  goto_tambah(){
    this.navCtrl.navigateForward('tambah-wisata');
  }
}
