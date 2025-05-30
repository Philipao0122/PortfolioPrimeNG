import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="home" class="relative min-h-screen flex items-center">
      <!-- Background with gradient overlay -->
      <div class="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800 z-0"></div>
      
      <!-- Decorative elements -->
      <div class="absolute top-20 right-10 md:right-40 w-64 h-64 bg-accent-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-bounce-slow"></div>
      <div class="absolute bottom-10 left-10 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-bounce-slow" style="animation-delay: 1s;"></div>
      
      <div class="container relative z-10">
        <div class="max-w-3xl">
          <div class="flex items-center mb-6">
            <div class="w-16 h-1 bg-primary-600 dark:bg-primary-400 mr-4"></div>
            <span class="text-primary-600 dark:text-primary-400 font-medium">Bienvenido</span>
          </div>
          
          <h1 class="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            Hola soy <span class="text-primary-600 dark:text-primary-400">Juan Felipe</span>
            <span class="block mt-2">Desarrollador Web</span>
          </h1>
          
          <p class="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            Creo innovadoras, funcionales y experiencias digitales 
            con tecnologías modernas y soluciones creativas.
          </p>
          
          <div class="flex flex-wrap gap-4">
            <a href="#projects" class="btn btn-primary">Ver mis proyectos</a>
            <a href="#contact" class="btn btn-outline">Contactarme</a>
          </div>
          
          <div class="mt-12 flex items-center space-x-4">
            <span class="text-gray-600 dark:text-gray-400">Sígueme:</span>
            <a href="#" class="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
              </svg>
            </a>

           
          </div>
        </div>
      </div>
      
      <!-- Scroll down indicator -->
      <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span class="text-sm text-gray-600 dark:text-gray-400 mb-2"></span>
        <svg class="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  `
})
export class HeroComponent {}