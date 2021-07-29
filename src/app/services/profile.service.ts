import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';


@Injectable({ providedIn: 'root' })
export class ProfileService {

  private username: string;
  private clientid = 'e6712bc8beabcaf2c159';
  private clientsecret = 'ab4c657cb7fd1001329a74da8d97f9b7ca913295';

  constructor(private http:HttpClient) {
    console.log("service is now ready");
    this.username = "Tevin-creator";
  }

  

  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username
     + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
     
  }

  getRepos(){
    return this.http.get("https://api.github.com/users/" + this.username
     + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
   
  }

  updateProfile(username:string){
    this.username = username;
  }
}
