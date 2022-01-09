import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string;
  isDesktopScreen = false;
  constructor(private breakpointObserver: BreakpointObserver) {
    this.title = 'Indsamlingskalender';
  }

  ngOnInit(): void {
    this.isDesktopScreen = this.breakpointObserver.isMatched(Breakpoints.Large);
  }
}
