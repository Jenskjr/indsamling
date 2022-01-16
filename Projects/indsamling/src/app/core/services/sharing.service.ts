import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root',
})
export class SharingService {
  isSideNavigation = false;
  isFilter = false;
  isDesktopScreen = false;

  constructor(
    private breakpointObserver: BreakpointObserver // private sharingService: SharingService
  ) {}

  setIsSideNavigation() {
    this.isSideNavigation = !this.isSideNavigation;
  }

  getIsSideNavigation() {
    return this.isSideNavigation;
  }

  setIsFilter() {
    this.isFilter = !this.isFilter;
  }

  getIsFilter() {
    return this.isFilter;
  }

  getIsDesktop() {
    this.isDesktopScreen =
      this.breakpointObserver.isMatched(Breakpoints.Large) ||
      this.breakpointObserver.isMatched(Breakpoints.XLarge)
        ? true
        : false;

    console.log(this.isDesktopScreen);
    return this.isDesktopScreen;
  }
}
