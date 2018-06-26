import { Component, OnInit, Input } from '@angular/core';
import { Track } from '../../playlist.model';

@Component({
  selector: 'app-track-detail',
  templateUrl: './track-detail.component.html',
  styleUrls: ['./track-detail.component.css']
})
export class TrackDetailComponent implements OnInit {
  @Input() track: Track;

  constructor() { }

  ngOnInit() {
  }

}
