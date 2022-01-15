import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharingService {
  isSideNavigation = false;

  setIsSideNavigation() {
    this.isSideNavigation = !this.isSideNavigation;
  }

  getIsSideNavigation() {
    return this.isSideNavigation;
  }
}
