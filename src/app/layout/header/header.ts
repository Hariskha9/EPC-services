import { Component, HostListener, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

interface NavLink {
  to: string;
  label: string;
}

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private router = inject(Router);

  scrolled = false;
  menuOpen = false;

  navLinks: NavLink[] = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/contact', label: 'Contact Us' },
  ];

  ngOnInit(): void {
    // Automatically close mobile menu on route changes
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.menuOpen = false;
      });
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.scrolled = window.scrollY > 10;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
}
