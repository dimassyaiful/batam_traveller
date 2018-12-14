import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  session:String = '0';
  constructor(public http: Http) {
    console.log('Provider Login Loaded ');
   }
   

  login(data){
    console.log('Stage 2 - Fungsi Login Running ');

    //port nya relatif ya guys
    var url="http://localhost/api_batamtraveller/user/login.php";
    return this.http.post(url,data);
  }

  load(){
    return this.http.get("http://localhost/api_batamtraveller/testcrud/load.php");
  }
}
