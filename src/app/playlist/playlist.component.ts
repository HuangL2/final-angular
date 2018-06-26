import { Component, OnInit } from '@angular/core';
import { Playlist, Track } from './playlist.model';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  playlists: Playlist[] = [];
  currentPlaylist: Playlist;

  ngOnInit(): void {
    if (this.playlists !== []) {
      this.currentPlaylist = this.playlists[0];
    }
  }

  constructor() {
    this.playlists = [
      new Playlist('test playlist',
        '123456789',
        'this is my test playlist',
        'https://upload.wikimedia.org/wikipedia/en/thumb/5/54/Public_image_ltd_album_cover.jpg/220px-Public_image_ltd_album_cover.jpg'),
      new Playlist('test playlist 2',
        'aerhg24',
        'TROLOLOL',
        'https://upload.wikimedia.org/wikipedia/en/thumb/5/54/Public_image_ltd_album_cover.jpg/220px-Public_image_ltd_album_cover.jpg')
    ];
    this.playlists[0].add(new Track('test song',
      '9874561590',
      50000,
      'my album',
      ['not leo', 'jk its leo']));
    this.playlists[0].add(new Track('test song222',
      'xas',
      50000,
      'my album',
      ['not leo', 'jk its leo']));

  }

  onPlaylistClicked(playlist: Playlist) {
    this.currentPlaylist = playlist;
  }

  getActive(playlist: Playlist): string {
    return playlist === this.currentPlaylist ? 'active' : '';
  }
}
