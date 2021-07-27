import { Component, OnInit } from '@angular/core';
import {LandingService} from "../services/landing.service";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
info:any[];
repos:any[];
  constructor(private landingService: LandingService) {
    this.landingService.getUserInfo().subscribe(info => {
      console.log(info);
      this.info = info;
    });
    this.landingService.getUserRepos().subscribe(repos => {
      console.log(repos);
      this.repos=repos;
    });
  }
  ngOnInit() {
  }

}
