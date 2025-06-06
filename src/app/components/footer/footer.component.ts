import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="bg-gray-900 text-white py-12">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="md:col-span-2">
            <a href="#" class="text-2xl font-bold text-primary-400 mb-4 inline-block">Portfolio</a>
            <p class="text-gray-400 mb-6 max-w-md">
              Un desarrollador web profesional especializado en crear sitios web y aplicaciones modernas y funcionales.
            </p>
            <div class="flex space-x-4">
              
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul class="space-y-2">
              <li><a href="#home" class="text-gray-400 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#about" class="text-gray-400 hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#skills" class="text-gray-400 hover:text-white transition-colors">Habilidades</a></li>
              <li><a href="#projects" class="text-gray-400 hover:text-white transition-colors">Proyectos</a></li>
              <li><a href="#contact" class="text-gray-400 hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-4">Servicios</h3>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Desarrollo Web</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Aplicaciones Móviles</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Diseño UI/UX</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Consultoria</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Optimización SEO</a></li>
            </ul>
          </div>
        </div>
        
        <div class="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-500 text-sm">
            © {{ currentYear }} Portfolio. Todos los derechos reservados.
          </p>
          
          <div class="mt-4 md:mt-0">
            <ul class="flex space-x-8 text-sm">
              <li><a href="#" class="text-gray-500 hover:text-white transition-colors">Política de Privacidad</a></li>
              <li><a href="#" class="text-gray-500 hover:text-white transition-colors">Términos de Servicio</a></li>
              <li><a href="#" class="text-gray-500 hover:text-white transition-colors">Política de Cookies</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}