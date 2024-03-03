import { Component } from '@angular/core';

interface AudioTrack {
  id: number;
  name: string;
  file: string;
}

const ELEMENT_DATA: AudioTrack[] = [
  {id: 1, name: 'Track 1', file: '../assets/Bossa Sonsa - Quincas Moreira.mp3'},
  {id: 2, name: 'Track 2', file: '../assets/Don\'t Fret - Quincas Moreira.mp3'},
  {id: 3, name: 'Track 3', file: '../assets/July - John Patitucci.mp3'},
  {id: 4, name: 'Track 4', file: '../assets/Nature Nurture - Quincas Moreira.mp3'},
];

@Component({
  selector: 'app-audio-table',
  templateUrl: './audio-table.component.html',
  styleUrls: ['./audio-table.component.css']
})
export class AudioTableComponent {
  displayedColumns: string[] = ['id', 'name', 'file'];
  dataSource = ELEMENT_DATA;
  selectedTrack?: AudioTrack;
}





