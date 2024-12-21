import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @ViewChild('about') aboutSection!: ElementRef;
  @ViewChild('education') educationSection!: ElementRef;
  @ViewChild('certification') certificationSection!: ElementRef;
  @ViewChild('experience') experienceSection!: ElementRef;
  @ViewChild('skills') skillsSection!: ElementRef;
  @ViewChild('projects') projectsSection!: ElementRef;
  @ViewChild('contact') contactSection!: ElementRef;

  scrollToSection(sectionId: string) {
    const sections: { [key: string]: ElementRef } = {
      about: this.aboutSection,
      education: this.educationSection,
      certification: this.certificationSection,
      experience: this.experienceSection,
      skills: this.skillsSection,
      projects: this.projectsSection,
      contact: this.contactSection
    };

    const targetSection = sections[sectionId];
    if (targetSection) {
      targetSection.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
