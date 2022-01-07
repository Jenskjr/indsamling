import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import projects from '../../../assets/projects';
import organizers from '../../../assets/organizers';
import { Project } from '../model/project';
import { Organizer } from '../model/organizer';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return { projects, organizers };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(projects: Project[], organizers: Organizer[]): number {
    return projects.length > 0 || organizers.length > 0
      ? Math.max(...projects.map((project) => project.id)) + 1
      : 11;
  }
}
