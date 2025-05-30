import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section id="contact" class="section">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Contacto</h2>
          <div class="w-24 h-1 bg-primary-600 dark:bg-primary-400 mx-auto"></div>
          <p class="mt-6 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Tienes un proyecto en mente o quieres aprender más sobre mis servicios? 
            No dudes en contactarme. Siempre estoy abierto a discutir nuevos proyectos y oportunidades.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <!-- Contact info -->
          <div class="space-y-8">
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <div class="flex items-start">
                <div class="p-3 bg-primary-100 dark:bg-primary-900 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold mb-1">Email</h3>
                  <p class="text-gray-600 dark:text-gray-400">nombre&#64;dominio.com</p>
                </div>
              </div>
            </div>
            
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <div class="flex items-start">
                <div class="p-3 bg-primary-100 dark:bg-primary-900 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold mb-1">Phone</h3>
                  <p class="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
            
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <div class="flex items-start">
                <div class="p-3 bg-primary-100 dark:bg-primary-900 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold mb-1">Location</h3>
                  <p class="text-gray-600 dark:text-gray-400">Pereira, Risaralda, Colombia</p>
                </div>
              </div>
            </div>
            
            <div class="mt-8">
              
              
            </div>
          </div>
          
          <!-- Contact form -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
            <h3 class="text-2xl font-bold mb-6">Enviar Mensaje</h3>
            
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nombre</label>
                <input 
                  type="text" 
                  id="name" 
                  formControlName="name" 
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-600 dark:focus:ring-primary-400 focus:border-transparent dark:bg-gray-700"
                  placeholder="Tu nombre"
                >
                <div *ngIf="name?.invalid && (name?.dirty || name?.touched)" class="text-red-600 text-sm mt-1">
                  <div *ngIf="name?.errors?.['required']">Nombre es requerido.</div>
                </div>
              </div>
              
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  formControlName="email" 
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-600 dark:focus:ring-primary-400 focus:border-transparent dark:bg-gray-700"
                  placeholder="Tu email"
                >
                <div *ngIf="email?.invalid && (email?.dirty || email?.touched)" class="text-red-600 text-sm mt-1">
                  <div *ngIf="email?.errors?.['required']">Email es requerido.</div>
                  <div *ngIf="email?.errors?.['email']">Por favor, ingresa un correo electrónico válido.</div>
                </div>
              </div>
              
              <div>
                <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Asunto</label>
                <input 
                  type="text" 
                  id="subject" 
                  formControlName="subject" 
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-600 dark:focus:ring-primary-400 focus:border-transparent dark:bg-gray-700"
                  placeholder="Asunto"
                >
              </div>
              
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Mensaje</label>
                <textarea 
                  id="message" 
                  formControlName="message" 
                  rows="5" 
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-600 dark:focus:ring-primary-400 focus:border-transparent dark:bg-gray-700"
                  placeholder="Tu mensaje"
                ></textarea>
                <div *ngIf="message?.invalid && (message?.dirty || message?.touched)" class="text-red-600 text-sm mt-1">
                  <div *ngIf="message?.errors?.['required']">El mensaje es requerido.</div>
                </div>
              </div>
              
              <button 
                type="submit" 
                [disabled]="contactForm.invalid"
                [ngClass]="{'opacity-50 cursor-not-allowed': contactForm.invalid}"
                class="btn btn-primary w-full">
                Enviar Mensaje
              </button>
              
              <div *ngIf="formSubmitted" class="py-3 px-4 rounded-lg bg-green-100 text-green-800 mt-4">
                Gracias por tu mensaje! Te contactaré pronto.
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent {
  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl(''),
    message: new FormControl('', [Validators.required])
  });
  
  formSubmitted = false;
  
  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get message() { return this.contactForm.get('message'); }
  
  onSubmit() {
    if (this.contactForm.valid) {
      // In a real app, you would handle form submission here
      console.log('Form submitted:', this.contactForm.value);
      this.formSubmitted = true;
      this.contactForm.reset();
    }
  }
}