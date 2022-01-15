import { Component, OnInit, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { SharingService } from 'src/app/core/services/sharing.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  isDesktopScreen = false;
  constructor(
    private breakpointObserver: BreakpointObserver,
    private sharingService: SharingService
  ) {}

  ngOnInit(): void {
    this.isDesktopScreen = this.breakpointObserver.isMatched(Breakpoints.Large);
  }

  setIsSideNavigation() {
    this.sharingService.setIsSideNavigation();
  }

  getIsSideNavigation() {
    return this.sharingService.getIsSideNavigation();
  }
}
