import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project';
import projects from 'src/assets/data/projects.json';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
    private projects: Project[] = projects;

  getProjects(): Project[] {
    return projects;
  }

  getProject(index: number): Project | null {
    return this.projects[index];
  }
}