import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PortofolioWebComponent } from "./portofolio-web/portofolio-web.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { ProjectComponent } from "./components/project/project.component";
import { ResumeComponent } from "./components/resume/resume.component";

export const routes: Routes = [
  {
    path: '',
    component: PortofolioWebComponent,
  },
  {
    path: 'skill',
    component: SkillsComponent,
  },
  {
    path: 'project',
    component: ProjectComponent,
  },
  {
    path: 'resume',
    component: ResumeComponent,
  },
];
