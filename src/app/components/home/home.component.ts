import { Component, OnInit } from '@angular/core';
import { project } from '../models/project';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  featureProjects: project[] = [];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.featureProjects = this.projectService.getFeaturedProjects();
  }

}
