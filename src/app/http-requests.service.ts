import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HTTPRequestsService {
  private url = 'http://localhost:3000'; // Replace with your API url

  constructor(private http: HttpClient) { }

  sendUserInput(userTier: string, userNumber: string) {
    return this.http.post(`${this.url}/send-sms`, { userTier, userNumber });
  }

  // Add more methods as needed for other HTTP requests
}
