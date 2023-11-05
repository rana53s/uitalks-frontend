import { Component, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnChanges {
  formData: {
    email: string;
    password: string;
  } = {
    email: '',
    password: '',
  };
  public showLogout = false;
  public showSigninPage = false;
  public showSignupPage = false;

  constructor(private router: Router, private authService: AuthService) {}

  isSignedIn = false;
  showLogin = false;

  toggleLogin() {
    this.showLogin = !this.showLogin;
  }

  showSignup = false;
  toggleSignup() {
    this.showSignup = !this.showSignup;
  }

  async submitUserCred() {
    await this.authService.signUp(this.formData.email, this.formData.password);
    if (this.authService.isLoggedIn) {
      this.isSignedIn = true;
    }
    if (this.isSignedIn) {
      setTimeout(() => {
        this.showSignup = !this.showSignup;
        this.showLogout = true;
      }, 1000);
    }
  }

  async signIn() {
    await this.authService.signIn(this.formData.email, this.formData.password);
    if (this.authService.isLoggedIn) {
      this.isSignedIn = true;
    }
    if (this.isSignedIn) {
      setTimeout(() => {
        this.showLogout = true;
        this.showLogin = !this.showLogin;
      }, 1000);
    }
  }

  public logOut() {
    this.authService.logOut();
    setTimeout(() => {
      this.showLogout = false;
    }, 1000);
  }

  public jumpToLogin() {
    this.showSignup = !this.showSignup;
    this.showLogin = !this.showLogin;
  }

  public goToHome() {
    this.router.navigate(['/home']);
  }
  public goToTopics() {
    this.router.navigate(['/topics']);
  }

  public goToRecent() {
    this.router.navigate(['/blogs/recent-blogs']);
  }

  public goToFeatured() {
    this.router.navigate(['/blogs/featured-blogs']);
  }

  ngOnChanges(changes: any): void {
    console.log('Changes: ' + changes);
    // if (this.authService.isLoggedIn) {
    //   this.showLogout = true;
    // }
  }
}
