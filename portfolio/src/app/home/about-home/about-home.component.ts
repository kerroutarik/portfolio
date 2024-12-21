import { Component } from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-about-home',
  templateUrl: './about-home.component.html',
  styleUrl: './about-home.component.css',

})
export class AboutHomeComponent {
  services = [
    {
      title: 'Full-Stack Development',
      description: 'Building dynamic and scalable applications with modern technologies.',
      icon: 'fas fa-code',
    },
    {
      title: 'Database Management',
      description: 'Efficiently working with relational, non-relational, and big data systems.',
      icon: 'fas fa-database',
    },
    {
      title: 'DevOps Engineering',
      description: 'Streamlining CI/CD pipelines and automating cloud deployments.',
      icon: 'fas fa-cloud-upload-alt',
    },
    {
      title: 'Cloud Computing',
      description: 'Designing and managing robust cloud-based solutions.',
      icon: 'fas fa-cloud',
    },
    {
      title: 'Data Science',
      description: 'Cleaning, preprocessing, and analyzing data for actionable insights.',
      icon: 'fas fa-chart-line',
    },
    {
      title: 'Machine Learning',
      description: 'Developing intelligent systems to solve complex problems.',
      icon: 'fas fa-robot',
    },
  ];
}
