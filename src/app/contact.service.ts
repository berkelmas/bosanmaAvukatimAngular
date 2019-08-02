import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContactService {

  constructor(private http: HttpClient) {}

  sendContactData(email: string) {
    return this.http.post(`${environment.apiEndpoint}addsubscriber/`, {sub_email : email})
  }
}
