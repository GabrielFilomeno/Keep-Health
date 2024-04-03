import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor (private router: Router) {}

  rotaHome() {
    this.router.navigate(['/home']);
  }
  rotaDiet() {
    this.router.navigate(['/login']);
  }
  rotaProfile() {
    this.router.navigate(['/cadastro']);
  }
}
