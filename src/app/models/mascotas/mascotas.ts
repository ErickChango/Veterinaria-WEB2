import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pet, MOCK_API_PETS } from './pets';

@Component({
  selector: 'app-mascotas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mascotas.html',
  styleUrl: './mascotas.css'
})

export class MascotasComponent implements OnInit {
  
  mascotas = signal<Pet[]>([]);

  ngOnInit(): void {
    console.log('Cargando datos locales...');
    this.mascotas.set(MOCK_API_PETS.data);
  }

  solicitarAdopcion(nombre: string) {
    alert(`¡Gracias por querer adoptar a ${nombre}!`);
  }
}