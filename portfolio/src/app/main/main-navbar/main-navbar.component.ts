import { Component } from '@angular/core';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrl: './main-navbar.component.css'
})
export class MainNavbarComponent {
  profileImagePath = 'assets/profile.jpeg';
  profileImagePathTarik= 'assets/profile.png';
  selectedLanguage = 'english'; // Default CV language
  selectedCV = 'assets/cv/english-cv.pdf'; // Default CV file path

  updateCV() {
    if (this.selectedLanguage === 'english') {
      this.selectedCV = '/assets/cv/english-cv.pdf';
    } else {
      this.selectedCV = '/assets/cv/french-cv.pdf';
    }
  }
}
