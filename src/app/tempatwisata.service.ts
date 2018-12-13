import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class TempatwisataService {

  constructor(public http: Http) {  console.log('Provider TestCRUD Loaded '); }

  url:any = "http://192.168.1.53/api_batamtraveller/tempat_wisata/";

  tambah(data){
    console.log('Stage 2 - Fungsi Simpan Provider Test CRUD Running');

    var url= this.url+'tambah.php';
    return this.http.post(url,data);
  }

  load(){
    return this.http.get(this.url+'load.php');
  }
}
