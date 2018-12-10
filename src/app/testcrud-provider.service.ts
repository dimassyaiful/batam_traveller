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
    var url="http://localhost/api_batamtraveller/testcrud/tambah.php";
    return this.http.post(url,data);
  }

  load(){
    return this.http.get("http://localhost/api_batamtraveller/testcrud/load.php");
  }
}
