import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import bio from 'src/assets/data/bio.json';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit {
  about: string[] = [];
  workExperience: any[] = [];
  education: any[] = [];

  constructor(private route: Router) { }


  ngOnInit() {
    this.about = bio.about || [];
    this.workExperience = bio.workExperience || [];
    this.education = bio.education || [];
  }

}
