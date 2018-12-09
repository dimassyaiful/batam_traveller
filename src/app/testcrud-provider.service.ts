import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class TestcrudProviderService {

  constructor(public http: Http) {
    console.log('Provider TestCRUD Loaded ');
   }

  tambah(data){
    console.log('Stage 2 - Fungsi Simpan Provider Test CRUD Running ');

    //port nya relatif ya guys
    var url="http://localhost:99/api_batamtraveller/testcrud/tambah.php";
    return this.http.post(url,data);
  }

  load(){
    console.log()
    return this.http.get("http://localhost:99/api_batamtraveller/testcrud/load.php");
  }
}
