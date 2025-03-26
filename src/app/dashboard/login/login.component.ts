import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AuthenticationService } from '../../shared/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatButtonModule, MatCardModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  // Constructeur
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  // Processus d' authentification
  onSubmit(): void {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/home']);
      this.errorMessage = '';
    } else {
      this.errorMessage = 'Identifiants incorrects';
    }
  }
}
