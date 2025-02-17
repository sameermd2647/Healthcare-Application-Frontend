import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5247/api/auth/login';  // ✅ Backend API URL

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    console.log('Calling API:', this.apiUrl, { username, password }); // ✅ Debug Log
    return this.http.post<any>(this.apiUrl, { username, password });
  }
}
