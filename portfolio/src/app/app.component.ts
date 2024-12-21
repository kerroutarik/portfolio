import {Component, HostListener, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  navbarBottom = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const navbar = document.getElementById('navbar');
      if (navbar) {
        this.navbarBottom = navbar.getBoundingClientRect().bottom;
      }
    }
    this.addCursorTraceEffect();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      const navbar = document.getElementById('navbar');
      const leftSidebar = document.getElementById('leftSidebar');
      const rightSidebar = document.getElementById('rightSidebar');

      if (!navbar || !leftSidebar || !rightSidebar) return;

      // Check if the window has scrolled past the navbar
      if (window.scrollY >= this.navbarBottom) {
        leftSidebar.classList.add('fixed');
        rightSidebar.classList.add('fixed');
      } else {
        leftSidebar.classList.remove('fixed');
        rightSidebar.classList.remove('fixed');
      }
    }
  }
  addCursorTraceEffect() {
    const cursor = document.querySelector('.cursor-trace') as HTMLElement;

    // Update cursor position on mousemove
    window.addEventListener('mousemove', (e: MouseEvent) => {
      cursor.style.left = `${e.pageX}px`;
      cursor.style.top = `${e.pageY}px`;
    });
  }
}
