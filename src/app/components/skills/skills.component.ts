import { Component, OnInit } from '@angular/core';
import { Skill, SKILLS } from 'src/app/interfaces/skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [];

  ngOnInit() {
    this.skills = SKILLS; // Load the skills from the interface
  }

}
