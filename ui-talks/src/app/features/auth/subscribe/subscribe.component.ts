import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss'],
})
export class SubscribeComponent implements OnInit {
  isSignedIn = false;

  formData: {
    email: string;
    password: string;
  } = {
    email: '',
    password: '',
  };

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem('user') !== null) {
      this.isSignedIn = true;
    }
  }

  async submitUserCred() {
    await this.authService.signUp(this.formData.email, this.formData.password);
    if (this.authService.isLoggedIn) {
      this.isSignedIn = true;
      this.router.navigate(['/home']);
    }
  }

  // submitUserCred() {
  //   console.log('email: ', this.formData.email);
  //   console.log('password: ', this.formData.password);
  // }
}
