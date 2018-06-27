import {Component, OnInit} from '@angular/core';
import {Service} from '../service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  playListEnabled = false;

  constructor(private service: Service) { }

  ngOnInit() {  }

  onClickSpotify() {
    // this.service.loginSpotify()
    //   .subscribe(function (response) {
    //     console.log(response);
    //   });
    this.playListEnabled = true;
  }

  onPlaylistClick() {

  }
}
