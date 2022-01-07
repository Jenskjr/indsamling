import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Organizer } from '../model/organizer';
import { Project } from '../model/project';
import { catchError, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private projectsURL = 'api/projects';
  private organizersURL = 'api/organizers';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.projectsURL).pipe(
      tap((_) => this.log('fetch projects')),
      catchError(this.handleError<Project[]>('getProjects', []))
    );
  }

  getProject(id: number): Observable<Project> {
    const url = `${this.projectsURL}/${id}`;
    return this.http.get<Project>(url).pipe(
      tap((_) => this.log(`fetched project id=${id}`)),
      catchError(this.handleError<Project>(`getProject id=${id}`))
    );
  }

  getOrganizers(): Observable<Organizer[]> {
    return this.http.get<Organizer[]>(this.organizersURL);
  }

  getOrganizer(id: number): Observable<Project> {
    const url = `${this.organizersURL}/${id}`;
    return this.http.get<Project>(url).pipe(
      tap((_) => this.log(`fetched organizer id=${id}`)),
      catchError(this.handleError<Project>(`getOrganizer id=${id}`))
    );
  }

  addProject(description: string): void {
    console.log('item', description);
  }

  addOrganizer(description: string): void {
    console.log('item', description);
  }

  removeProject(): void {
    console.log('remove item');
  }

  removeOrganizer(): void {
    console.log('remove item');
  }

  private handleError<T>(operation: string, result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(errormessage: string) {
    console.log(errormessage);
  }
}
