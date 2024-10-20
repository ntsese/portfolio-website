import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/interfaces/project';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  featureProjects: Project[] = [];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.featureProjects = this.projectService.getFeaturedProjects();
  }

}
