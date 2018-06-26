import {s, st} from '@angular/core/src/render3';

export class Track {
  public name: string;
  public id: string;
  public duration_ms: number;
  public album: string;
  public artists: string[];

  constructor(name: string, id: string, duration_ms: number | string, album?: string, artist?: string[]) {
    this.name = name;
    this.id = id;
    this.duration_ms = Number(duration_ms);
    this.album = album;
    this.artists = artist;
  }
}

export class Playlist {
  public description: string;
  public id: string;
  public name: string;
  public tracks: Track[];
  public image: string;

  constructor(name: string, id: string, description: string, image: string, tracks?: Track[]) {
    this.name = name;
    this.id = id;
    this.description = description;
    this.image = image;
    this.tracks = tracks || [];
  }

  add(track: Track) {
    this.tracks.push(track);
  }
}


