import { Component, OnInit } from '@angular/core';
import projects from '../assets/projects.json';
import { Project } from './core/model/project';
import organizers from '../assets/organizers';
import { Organizer } from './core/model/organizer';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title: string;
  filter: string;
  projects: Project[];
  organizers: Organizer[];
  selectedOrganizer = new FormControl('all');
  editable: boolean;

  constructor() {
    this.projects = projects;
    this.organizers = organizers;
    this.filter = 'all';
    this.title = 'Indsamlingskalender';
    this.editable = false;
  }

  ngOnInit() {
    console.log('projects', this.projects);
    console.log('organizers', this.organizers);
  }

  get filteredProjects() {
    if (this.selectedOrganizer.value === 'all') {
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
