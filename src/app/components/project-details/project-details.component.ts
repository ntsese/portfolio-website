import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/interfaces/project';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  project: Project;

  constructor(
    private route: ActivatedRoute,
  private projectService: ProjectService) { }

  ngOnInit(): void{
    const id = this.route.snapshot.paramMap.get('id');
    this.getProjectById(id);
  }


  getProjectById(id: string): void{
   this.project = this.projectService.getProject(parseInt(id));
  }

}
