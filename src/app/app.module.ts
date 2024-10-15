import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { BioComponent } from './components/bio/bio.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { ProjectService } from './components/services/project.service';
import { ContactComponent } from './components/contact/contact.component';
import { SkillsComponent } from './components/skills/skills.component';



@NgModule({
  declarations: [			
    AppComponent,
      HomeComponent,
      ProjectsComponent,
      BioComponent,
      ProjectDetailsComponent,
      ContactComponent,
      SkillsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

    
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
