import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class TempatwisataService {

  constructor(public http: Http) {  console.log('Provider TestCRUD Loaded '); }

  url:any = "http://localhost/api_batamtraveller/tempat_wisata/";
  
  id_update_data: any; //untuk edit data
  id_hapus: any;
  
  tambah(data){
    console.log('Stage 2 - Fungsi Simpan Provider Test CRUD Running');

    var url= this.url+'tambah.php';
    return this.http.post(url,data);
  }

  load(){
    var url= this.url+'load.php';
    return this.http.get(url);
  }

  load_data_update(id_tempat){
    var url= this.url+'load_data_update.php';
    return this.http.post(url,id_tempat);
  }

  update(data){
    var url= this.url+'update.php';
    return this.http.post(url,data);
  }

  hapus(id_tempat){
    var url= this.url+'hapus.php';
    return this.http.post(url,id_tempat);
  }
}
