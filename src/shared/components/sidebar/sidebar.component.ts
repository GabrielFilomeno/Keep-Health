import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  showButton: boolean = false;
  constructor (
    private router: Router,
    @Inject(DOCUMENT) private document: Document
    ) {}

    @HostListener('window:scroll',[])
    onWindowScroll() {
      
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      this.showButton = true;
    } else {
      this.showButton = false;
    }
    }

    voltarAoTopo() {
      this.document.body.scrollTop = 0;
      this.document.documentElement.scrollTop = 0;
    }

  rotaProfile() {
    this.router.navigate(['/profile']);
  };

  rotaDiet() {
    this.router.navigate(['/diet']);
  }

}
