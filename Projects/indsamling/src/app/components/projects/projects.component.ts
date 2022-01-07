import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Organizer } from '../../core/model/organizer';
import { Project } from '../../core/model/project';
import projects from '../../../assets/projects';
import organizers from '../../../assets/organizers';
import { DataService } from '../../core/services/data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  currentPage = 1;
  filter: string;
  projects: Project[] = [];
  organizers: Organizer[] = [];
  selectedOrganizer = new FormControl();
  searchString = new FormControl();
  editable: boolean;

  constructor(private dataService: DataService) {
    this.filter = 'all';
    this.editable = false;
    this.selectedOrganizer.setValue('Alle');
    this.searchString.setValue('');
  }

  ngOnInit() {
    this.getData();
    console.log('projects', this.projects);
    console.log('organizers', this.organizers);
  }

  getData(): void {
    this.dataService
      .getProjects()
      .subscribe((projects) => (this.projects = projects));
    this.dataService
      .getOrganizers()
      .subscribe((organizers) => (this.organizers = organizers));
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

  addProject(description: string) {
    this.dataService.addProject(description);
  }

  addOrganizer(description: string) {
    this.dataService.addOrganizer(description);
  }

  // skal flyttes til dataService
  addItem(description: string) {
    this.projects.unshift({
      id: 100,
      title: 'none',
      description,
      organizer: 'none',
      done: false,
    });
  }

  // skal flyttes til dataService
  remove(item: Project) {
    this.projects.splice(this.projects.indexOf(item), 1);
  }
}
