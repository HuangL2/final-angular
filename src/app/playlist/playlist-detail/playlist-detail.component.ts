import { Component, OnInit, Input } from '@angular/core';
import { Playlist } from '../playlist.model';

@Component({
  selector: 'app-playlist-detail',
  templateUrl: './playlist-detail.component.html',
  styleUrls: ['./playlist-detail.component.css']
})
export class PlaylistDetailComponent implements OnInit {
  @Input() playlist: Playlist;

  constructor() { }

  ngOnInit() {
  }

}
