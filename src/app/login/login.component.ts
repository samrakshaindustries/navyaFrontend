import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // 👈 Import this for ngModel

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule], // 👈 Include it here
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  onSubmit() {
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }
}
