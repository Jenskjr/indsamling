import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Organizer } from '../core/model/organizer';
import { Project } from '../core/model/project';
import projects from '../../assets/projects.json';
import organizers from '../../assets/organizers';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  currentPage = 1;
  title: string;
  filter: string;
  projects: Project[];
  organizers: Organizer[];
  selectedOrganizer = new FormControl();
  searchString = new FormControl();
  editable: boolean;

  constructor() {
    this.projects = projects;
    this.organizers = organizers;
    this.filter = 'all';
    this.title = 'Indsamlingskalender';
    this.editable = false;
    this.selectedOrganizer.setValue('Alle');
    this.searchString.setValue('');
  }

  ngOnInit() {
    console.log('projects', this.projects);
    console.log('organizers', this.organizers);
  }

  get filteredProjects() {
    if (
      this.searchString.value !== '' &&
      this.selectedOrganizer.value !== 'Alle'
    ) {
      return this.projects.filter(
        (item: Project) =>
          item.title.includes(this.searchString.value) &&
          this.selectedOrganizer.value === item.organizer &&
          item
      );
    }
    // hvis alle er valgt
    if (
      this.searchString.value !== '' &&
      this.selectedOrganizer.value === 'Alle'
    ) {
      return this.projects.filter(
        (item: Project) =>
          item.title.includes(this.searchString.value) ||
          (item.organizer.includes(this.searchString.value) && item)
      );
    }
    if (this.selectedOrganizer.value === 'Alle') {
      return this.projects;
    }
    return this.projects.filter(
      (item: Project) => this.selectedOrganizer.value === item.organizer && item
    );
  }

  addItem(description: string) {
    this.projects.unshift({
      id: 100,
      title: 'none',
      description,
      organizer: 'none',
      done: false,
    });
  }

  remove(item: Project) {
    this.projects.splice(this.projects.indexOf(item), 1);
  }
}
