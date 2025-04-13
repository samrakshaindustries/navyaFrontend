import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component'; // <-- Import it here

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [LoginComponent], // <-- Add it here
})
export class AppComponent {}
