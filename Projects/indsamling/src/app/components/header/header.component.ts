import { Component, OnInit } from '@angular/core';
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
  searchIcon = 'search';
  sideMenu = false;
  isDesktopScreen = false;

  constructor(private sharingService: SharingService) {
    this.title = 'Indsamlingskalender';
  }

  ngOnInit(): void {
    this.isDesktopScreen = this.sharingService.getIsDesktop();
    console.log(this.isDesktopScreen);
  }

  setIsSideNavigation() {
    this.sharingService.setIsSideNavigation();
  }

  setIsFilter() {
    this.sharingService.setIsFilter();
  }

  getIsDesktopScreen() {
    return this.sharingService.getIsDesktop();
  }
}
