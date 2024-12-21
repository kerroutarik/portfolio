import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home/home.component";
import {AboutHomeComponent} from "./home/about-home/about-home.component";
import {FormationHomeComponent} from "./home/formation-home/formation-home.component";
import {CertificationHomeComponent} from "./home/certification-home/certification-home.component";
import {ExperienceHomeComponent} from "./home/experience-home/experience-home.component";
import {SkillsHomeComponent} from "./home/skills-home/skills-home.component";
import {ProjectHomeComponent} from "./home/project-home/project-home.component";
import {ContactHomeComponent} from "./home/contact-home/contact-home.component";
import {TemplateMainComponent} from "./main/template-main/template-main.component";
import {HireMainComponent} from "./main/hire-main/hire-main.component";
import {CertifcationComponent} from "./main/certifcation/certifcation.component";
import {ExperiencesComponent} from "./main/experiences/experiences.component";
import {ProjectComponent} from "./main/project/project.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirect empty path to 'home'
  {path: 'home', component: HomeComponent},
  {path:'route',component:TemplateMainComponent,children:[
      {path:'hire',component:HireMainComponent},
      {path:'certs',component:CertifcationComponent},
      {path:'experiences',component:ExperiencesComponent},
      {path:'project',component:ProjectComponent},

    ]},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
