import { Injectable } from '@angular/core';
import { project } from '../models/project';

@Injectable()
export class ProjectService {

    
constructor() { }


    private projects: project[] = [
        {
            id: 1,
            name: 'Project 1',
            description: 'brief description of project 1',
            image: 'project.jpeg'
        },
        {
            id: 2,
            name: 'Project 2',
            description: 'brief description of project 2',
            image: 'project1.jpeg'
        }
    ];


    getFeaturedProjects(): project[]{
        return this.projects.slice(0,2); //return the first project featured
    }

    getAllProject(): project[]{
        return this.projects;
    }

    getProject(id: number): project{
        return this.projects.find(project => project.id == id);
    }


}
