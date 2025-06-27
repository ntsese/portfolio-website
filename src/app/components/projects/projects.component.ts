import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../interfaces/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projectsList: Project[] = [];
  selectedProject: Project | null = null;

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectsList = this.projectService.getProjects();
  }

  selectProject(project: Project) {
    this.selectedProject = project;
  }
}