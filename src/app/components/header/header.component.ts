import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header [class]="isScrolled ? 'fixed top-0 left-0 right-0 bg-white/90 dark:bg-gray-900/90 shadow-md backdrop-blur-sm z-50 transition-all duration-300' : 'absolute top-0 left-0 right-0 z-50 transition-all duration-300'">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-4">
          <a href="#" class="text-2xl font-bold text-primary-600 dark:text-primary-400">Portfolio</a>
          
          <button 
            class="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
            (click)="toggleMobileMenu()">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          
          <nav class="hidden md:flex items-center space-x-8">
            <a href="#Inicio" class="nav-link">Inicio</a>
            <a href="#about" class="nav-link">Sobre mí</a>
            <a href="#skills" class="nav-link">Habilidades</a>
            <a href="#projects" class="nav-link">Proyectos</a>
            <a href="#contact" class="nav-link">Contacto</a>
            <button 
              (click)="toggleTheme()" 
              class="p-2 rounded-full bg-gray-200 dark:bg-gray-700 focus:outline-none">
              <svg *ngIf="!isDarkMode()" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
              <svg *ngIf="isDarkMode()" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </button>
          </nav>
        </div>
        
        <!-- Mobile menu -->
        <div *ngIf="mobileMenuOpen" class="md:hidden py-4 animate-fade-in">
          <nav class="flex flex-col space-y-4">
            <a href="#Home" class="nav-link" (click)="mobileMenuOpen = false">Inicio</a>
            <a href="#about" class="nav-link" (click)="mobileMenuOpen = false">Sobre mí </a>
            <a href="#skills" class="nav-link" (click)="mobileMenuOpen = false">Habilidades</a>
            <a href="#projects" class="nav-link" (click)="mobileMenuOpen = false">Proyectos</a>
            <a href="#contact" class="nav-link" (click)="mobileMenuOpen = false">Contacto</a>
            <button 
              (click)="toggleTheme()" 
              class="flex items-center space-x-2 p-2 rounded-md">
              <span>Toggle Theme</span>
              <span class="p-1 rounded-full bg-gray-200 dark:bg-gray-700">
                <svg *ngIf="!isDarkMode()" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
                <svg *ngIf="isDarkMode()" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .nav-link {
      @apply text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors;
    }
  `]
})
export class HeaderComponent {
  private themeService = inject(ThemeService);
  mobileMenuOpen = false;
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  isDarkMode() {
    return this.themeService.isDarkMode();
  }
}