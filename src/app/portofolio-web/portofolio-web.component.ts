import { Component } from '@angular/core';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { HomeComponent } from '../components/home/home.component';
import { SkillsComponent } from '../components/skills/skills.component';
import { ProjectComponent } from '../components/project/project.component';
import { ResumeComponent } from '../components/resume/resume.component';

@Component({
  selector: 'app-portofolio-web',
  standalone: true,
  templateUrl: './portofolio-web.component.html',
  styleUrls: ['./portofolio-web.component.css'],
  imports: [
    NavbarComponent,
    HomeComponent,
    SkillsComponent,
    ProjectComponent,
    ResumeComponent,
]
})
export class PortofolioWebComponent { }