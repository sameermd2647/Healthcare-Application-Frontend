import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule]
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    console.log('Login clicked', this.username, this.password);  // ✅ Debug Log

    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        console.log('Login successful', response);  // ✅ Debug Log
        localStorage.setItem('token', response.token);  // ✅ Store JWT Token
        this.router.navigate(['/patients']);  // ✅ Redirect on success
      },
      (error) => {
        console.error('Login failed', error);
      }
    );
  }
}
