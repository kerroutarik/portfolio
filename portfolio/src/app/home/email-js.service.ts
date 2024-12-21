import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmailJsService {

  private emailJsUrl = 'https://api.emailjs.com/api/v1.0/email/send'; // EmailJS API URL

  constructor(private http: HttpClient) {}

  sendMessage(messageParams: any): Observable<any> {
    const emailJsPayload = {
      service_id: 'service_m4wt7wv',  // replace with your service ID from EmailJS
      template_id: 'template_fbfssxy',  // replace with your template ID from EmailJS
      user_id: 'NzcwNjYx',  // replace with your user ID from EmailJS
      template_params: messageParams
    };

    return this.http.post(this.emailJsUrl, emailJsPayload);
  }
}
