import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  link?: string;
  github?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, AnimateOnScrollModule],
  template: `
    <section id="projects" class="section bg-gray-50 dark:bg-gray-800">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-white">Mis Proyectos</h2>
          <div class="w-24 h-1 bg-primary-600 dark:bg-primary-400 mx-auto"></div>
          <p class="mt-6 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Aquí te muestro algunos de mis proyectos recientes. Cada proyecto representa mis habilidades y 
            mi enfoque para resolver problemas.
          </p>
        </div>
        
        <!-- Filter buttons -->
        <div class="flex justify-center flex-wrap gap-2 mb-12">
          <button 
            *ngFor="let category of categories" 
            (click)="filterProjects(category.value)"
            [class]="activeFilter === category.value ? 
              'px-5 py-2 rounded-full bg-primary-600 text-white font-medium' : 
              'px-5 py-2 rounded-full bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 font-medium'"
            class="transition-colors duration-200">
            {{ category.label }}
          </button>
        </div>
        
        <!-- Projects grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" pAnimateOnScroll>
          <div 
            *ngFor="let project of filteredProjects; let i = index" 
            class="group"
            [@fadeIn]
            [style]="{'animation-delay': (i * 0.1) + 's'}"
            pAnimateOnScroll
            enterClass="fadein"
            [threshold]="0.1">
            <div class="card overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
              <div class="relative overflow-hidden h-56">
                <img 
                  [src]="project.image" 
                  [alt]="project.title"
                  class="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div class="p-4 w-full">
                    <div class="flex gap-3 justify-end">
                      <a *ngIf="project.github" [href]="project.github" target="_blank" class="p-2 bg-white rounded-full text-gray-800 hover:bg-primary-50 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                      <a *ngIf="project.github" [href]="project.link" target="_blank" class="p-2 bg-white rounded-full text-gray-800 hover:bg-primary-50 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="p-6">
                <div class="flex flex-wrap gap-2 mb-3">
                  <span class="px-3 py-1 text-xs rounded-full bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 font-medium">
                    {{ project.category }}
                  </span>
                </div>
                
                <h3 class="text-xl font-bold mb-2 text-white">{{ project.title }}</h3>
                
                <p class="text-gray-600 dark:text-gray-400 mb-4">{{ project.description }}</p>
                
                <div class="flex flex-wrap gap-2">
                  <span 
                    *ngFor="let tech of project.technologies" 
                    class="px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300">
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
    }
    
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .fadein {
      animation: fadeIn 0.6s ease-out forwards;
    }
  `]
})
export class ProjectsComponent {
  categories = [
    { label: 'Todos', value: 'all' },
    { label: 'Aplicaciones web', value: 'web' },
    { label: 'Aplicaciones móviles', value: 'mobile' },
    
  ];
  
  activeFilter: string = 'all';
  
  projects: Project[] = [
    {
      id: 1,
      title: 'Sistema de Reservas de Espacios (Clase Patrones de diseño)',
      description: 'Plataforma de reservas que permite a los usuarios buscar, filtrar y reservar espacios disponibles, con autenticación de usuarios, control de disponibilidad y sistema de bloqueo de espacios por usuario.',
      image: './assets',
      category: 'web',
      technologies: ['Typescrit', 'Tailwind CSS',  'Node.js', 'Vercel'],
      github: 'https://github.com/Philipao0122/Reserva_espaciosv3',
      link: 'https://reservavuelos.vercel.app/'
      
    },
    {
      id: 2,
      title: 'Clase Emprendimiento- idea de negocio(Pagina web)',
      description: 'Aplicación móvil para realizar seguimiento de entrenamientos, nutrición y métricas de salud con recomendaciones personalizadas.',
      image: '../assets/logo_value.png',
      category: 'Web',
      technologies: ['Html', 'Tailwind CSS', 'JavaScript', 'Vercel'],
      github: 'https://github.com/Philipao0122/Web_Value',
        link: 'https://web-value.vercel.app/'
    },
    {
      id: 3,
      title: 'Aplicación para gestionar visitas comerciales (Clase Desarrollo movil)',
      description: 'Aplicación para gestionar visitas comerciales, mostrar historiales recientes y visualizar detalles clave con componentes dinámicos.',
      image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'mobile',
      technologies: ['React Native', 'Expo', 'Tailwind-RN', 'React Navigation','Firebase', ],
      github: 'https://github.com/Tovar-D3v/visionapp',
      
    }

    
   
  ];
  
  get filteredProjects(): Project[] {
    if (this.activeFilter === 'all') {
      return this.projects;
    }
    return this.projects.filter(project => project.category === this.activeFilter);
  }
  
  filterProjects = (category: string): void => {
    this.activeFilter = category;
    // Trigger change detection
    this.projects = [...this.projects];
  }
}