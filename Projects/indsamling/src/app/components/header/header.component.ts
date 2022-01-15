import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { SharingService } from 'src/app/core/services/sharing.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string;
  homeIcon = 'home';
  menuIcon = 'menu';
  sideMenu = false;
  isDesktopScreen = false;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private sharingService: SharingService
  ) {
    this.title = 'Indsamlingskalender';
  }

  ngOnInit(): void {
    this.isDesktopScreen = this.breakpointObserver.isMatched(Breakpoints.Large);
  }

  // kan laves som en sharing servie
  setSideNav() {
    this.sharingService.setIsSideNavigation();
  }
}
