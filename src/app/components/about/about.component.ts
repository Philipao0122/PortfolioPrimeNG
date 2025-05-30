import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="section bg-gray-50 dark:bg-gray-800">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div class="w-24 h-1 bg-primary-600 dark:bg-primary-400 mx-auto"></div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div class="relative">
            <!-- Profile image with decorative elements -->
            <div class="absolute inset-0 transform translate-x-4 translate-y-4 rounded-xl bg-primary-600 dark:bg-primary-400 opacity-20"></div>
            <img 
              src="./assets/profile.jpg" 
              alt="Professional headshot" 
              class="w-full h-auto object-cover rounded-xl shadow-lg relative z-10"
            />
            <div class="absolute -bottom-5 -right-5 w-24 h-24 bg-accent-400 rounded-full opacity-20"></div>
            <div class="absolute -top-5 -left-5 w-16 h-16 bg-secondary-400 rounded-full opacity-20"></div>
          </div>
          
          <div class="space-y-6">
           
            
            <h3 class="text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-300"> Conoce sobre mi</h3>
            
            <p class="text-gray-700 dark:text-gray-300">
            Hola, soy un desarrollador web con pasión por construir interfaces limpias, dinámicas y funcionales. Me especializo en el desarrollo frontend utilizando tecnologías como HTML, CSS y JavaScript, y disfruto transformando ideas en experiencias interactivas.


            </p>
            
            <p class="text-gray-700 dark:text-gray-300">
            Tengo experiencia creando componentes reutilizables, interfaces responsive y estilos modernos aplicando frameworks como Tailwind CSS. En el backend, he trabajado con tecnologías como PHP y Java (Spring Boot), desarrollando APIs, manejando bases de datos y estructurando sistemas modulares orientados a la lógica de negocio.

            Actualmente, me enfoco en desarrollar proyectos tipo MVP, combinando diseño atractivo con lógica funcional, desde el formulario hasta la base de datos.
            </p>
            
            <div class="grid grid-cols-2 gap-4 pt-4">
              <div>
                <h4 class="font-bold">Name:</h4>
                <p>Felipe</p>
              </div>
              <div>
                <h4 class="font-bold">Email:</h4>
                <p>Hola&#64;example.com</p>
              </div>
              <div>
                <h4 class="font-bold">Location:</h4>
                <p>Pereira, Colombia</p>
              </div>
              
            </div>
            
           
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent {}