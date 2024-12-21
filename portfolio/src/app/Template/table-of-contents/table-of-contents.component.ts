import {Component, EventEmitter, HostListener, Output} from '@angular/core';

@Component({
  selector: 'app-table-of-contents',
  templateUrl: './table-of-contents.component.html',
  styleUrl: './table-of-contents.component.css'
})
export class TableOfContentsComponent {
  currentSection: string = '';
  @Output() navigate = new EventEmitter<string>();

  scrollToSection(sectionId: string) {
    this.navigate.emit(sectionId);
  }
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const sections = document.querySelectorAll('section');
    let current = '';
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop <= 100 && sectionTop >= -100) {
        current = section.id;
      }
    });
    this.currentSection = current;
  }
}
