import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loading: boolean = false;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private http: HttpClient) {}

  onSubmit(): void {
    this.loading = true;
    this.errorMessage = '';
    this.successMessage = '';

    const loginData = { username: this.username, password: this.password };

    this.http.post('http://localhost:3000/api/login', loginData).subscribe(
      (response: any) => {
        this.successMessage = response.message;
        this.loading = false;
      },
      (error: any) => {
        this.errorMessage = error.error.message;
        this.loading = false;
      }
    );
  }
}
