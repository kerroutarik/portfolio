import { Component } from '@angular/core';
import emailjs from "@emailjs/browser";

@Component({
  selector: 'app-hire-main',
  templateUrl: './hire-main.component.html',
  styleUrl: './hire-main.component.css'
})
export class HireMainComponent {
  public successMessage: string = '';  // To store success message
  public errorMessage: string = '';    // To store error message

  public sendEmail(e: Event) {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const userName = formData.get('user_name')?.toString();
    const userEmail = formData.get('user_email')?.toString();
    const message = formData.get('message')?.toString();

    // Check if the required data exists
    if (!userName || !userEmail || !message) {
      console.log('Missing form data');
      return;
    }

    const templateParams = {
      user_name: userName,
      user_email: userEmail,
      message: message,
    };

    // Send the email using EmailJS
    emailjs
      .send('service_m4wt7wv', 'template_fbfssxy', templateParams, 'xxwCqNdCNaVegFkON')
      .then(
        (response) => {
          console.log('SUCCESS!', response);
          this.successMessage = 'Your message has been sent successfully!';  // Success message
          this.errorMessage = '';  // Clear any previous error message
          form.reset();  // Reset the form fields after successful submission
        },
        (error) => {
          console.log('FAILED...', error.text);
          this.successMessage = '';  // Clear any previous success message
          this.errorMessage = 'Failed to send your message. Please try again later.';  // Error message
        }
      );
  }
}
