import { Component, Input, OnInit } from '@angular/core';
import { Routes } from '@angular/router';

@Component ({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() playlistAble: boolean;

  constructor() {
    this.playlistAble = false;
  }

  ngOnInit() { }

  isPlaylistAble() {
    return this.playlistAble ? 'enabled' : 'disabled';
  }
}
