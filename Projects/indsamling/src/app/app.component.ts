import { Component, OnInit } from '@angular/core';
import { DataService } from './core/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title: string;

  constructor(private dataService: DataService) {
    this.title = 'Indsamlingskalender';
  }

  ngOnInit() {
    console.log('init');
  }
}
