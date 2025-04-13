import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Ensure this is here for ngModel
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,   // Includes CommonModule
    FormsModule      // Needed for ngModel
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
