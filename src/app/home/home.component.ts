import { Component, OnInit } from '@angular/core';
import {Service} from '../service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: Service) { }

  ngOnInit() { }

  onClickSpotify() {
    this.service.loginSpotify()
      .subscribe(function (response) {
        console.log(response);
      });
  }

  onClickTest() {
    this.service.getPlaylist()
      .subscribe( response => console.log(response) );

  }

  onClickYoutube() {
    this.service.loginYoutube()
      .subscribe(function (response) {
        console.log(response);
      });
  }
}
