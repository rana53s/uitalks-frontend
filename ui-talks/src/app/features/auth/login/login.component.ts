import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  formData: {
    email: string;
    password: string;
  } = {
    email: '',
    password: '',
  };

  isLoggedIn = true;

  constructor(private authService: AuthService, private router: Router) {}

  loginWithGoogle() {
    console.log('Login With Google');
  }

  async signIn() {
    await this.authService.signIn(this.formData.email, this.formData.password);
    if (this.authService.isLoggedIn) {
      this.isLoggedIn = true;
      this.router.navigate(['/home']);
    }
  }
}
