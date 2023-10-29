import { Component, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnChanges {
  constructor(private router: Router, private authService: AuthService) {}

  showLogout = false;

  public logOut() {
    this.authService.logOut();
    this.router.navigate(['/home']);
    this.showLogout = false;
  }

  public loginToPage() {
    this.router.navigate(['/login']);
  }

  public subscribeUs() {
    this.router.navigate(['/subscribe']);
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
