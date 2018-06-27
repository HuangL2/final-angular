import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class Service {
  constructor(private http: HttpClient) { }

  loginSpotify(): any {
    return this.http.get('http://localhost:3000/oauth/login/spotify');
  }

  getPlaylist() {
    return this.http.get('http://localhost:3000/');
  }

  loginYoutube() {
    return this.http.get('https://www.google.com');
  }
}
