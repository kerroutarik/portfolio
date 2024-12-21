import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplitterModule } from 'primeng/splitter';
import { NavbarComponent } from './Template/navbar/navbar.component';
import { SidebarComponent } from './Template/sidebar/sidebar.component';
import { FooterComponent } from './Template/footer/footer.component';
import { TableOfContentsComponent } from './Template/table-of-contents/table-of-contents.component';
import { AboutHomeComponent } from './home/about-home/about-home.component';
import { FormationHomeComponent } from './home/formation-home/formation-home.component';
import { CertificationHomeComponent } from './home/certification-home/certification-home.component';
import { ExperienceHomeComponent } from './home/experience-home/experience-home.component';
import { ProjectHomeComponent } from './home/project-home/project-home.component';
import { ContactHomeComponent } from './home/contact-home/contact-home.component';
import { SkillsHomeComponent } from './home/skills-home/skills-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule here
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home/home.component';
import { TemplateMainComponent } from './main/template-main/template-main.component';
import { HireMainComponent } from './main/hire-main/hire-main.component';
import { MainNavbarComponent } from './main/main-navbar/main-navbar.component';
import { CertifcationComponent } from './main/certifcation/certifcation.component';
import { ExperiencesComponent } from './main/experiences/experiences.component';
import { ProjectComponent } from './main/project/project.component';  // Import ReactiveFormsModule

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    TableOfContentsComponent,
    AboutHomeComponent,
    FormationHomeComponent,
    CertificationHomeComponent,
    ExperienceHomeComponent,
    ProjectHomeComponent,
    ContactHomeComponent,
    SkillsHomeComponent,
    HomeComponent,
    TemplateMainComponent,
    HireMainComponent,
    MainNavbarComponent,
    CertifcationComponent,
    ExperiencesComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SplitterModule,
    InputTextModule,
    CardModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
