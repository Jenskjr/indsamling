import { Component } from '@angular/core';
import { SharingService } from 'src/app/core/services/sharing.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  isDesktopScreen = false;
  constructor(private sharingService: SharingService) {}

  setIsSideNavigation() {
    this.sharingService.setIsSideNavigation();
  }

  getIsSideNavigation() {
    return this.sharingService.getIsSideNavigation();
  }

  getIsDesktopScreen() {
    return this.sharingService.getIsDesktop();
  }
}
