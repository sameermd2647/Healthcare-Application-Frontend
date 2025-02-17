import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:5247/api';  // Ensure this matches your backend URL

  constructor(private http: HttpClient) {}

  getPatients(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/patients`);
  }

  getPatientById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/patients/${id}`);
  }
}
