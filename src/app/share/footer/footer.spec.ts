import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})

export class FooterComponent {
  
  branding = {
    name: 'Bigotes',
    highlight: '.',
    description: 'Tecnología y cariño para el bienestar de tus mascotas.'
  };

  linkGroups = [
    {
      title: 'Compañía',
      links: [
        { label: 'Sobre Nosotros', url: '#' },
        { label: 'Equipo Médico', url: '#' },
        { label: 'Trabaja con nosotros', url: '#' }
      ]
    },
    {
      title: 'Servicios',
      links: [
        { label: 'Consulta General', url: '#' },
        { label: 'Cirugía Avanzada', url: '#' },
        { label: 'Guardería & Spa', url: '#' },
        { label: 'Urgencias 24/7', url: '#' }
      ]
    }
  ];

  socialLinks = [
    { label: 'Instagram', url: '#' },
    { label: 'Facebook', url: '#' },
    { label: 'Twitter', url: '#' }
  ];

  currentYear = new Date().getFullYear();
}