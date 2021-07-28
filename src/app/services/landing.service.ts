import { Injectable } from '@angular/core';
import {Http} from '@angular/common/http'

import 'rxjs/add/operator/map';

@Injectable({ providedIn: 'root' })
export class LandingService {
  private username: string;
  private clientid = 'c4c1a435f2395d421bcd';
  private clientsecret = '99f8a79c7352d6a96d6a300017245070bd6d97ce';

  constructor(private http:Http) {
    console.log("service is now ready!");
    this.username = "Tevin-creator";

   }
   getUserInfo(){
     return this.http.get("https://api.github.com/users/" + this.username +
     "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
     .map(res => res.json());
   }

   getUserRepos(){
     return this.http.get("https://api.github.com/users/" + this.username +
     "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
     .map(res => res.json());
   }

}
