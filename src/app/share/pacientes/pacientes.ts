import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-pacientes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pacientes.html',
  styleUrls: ['./pacientes.css'] 
})
export class PacientesComponent {

  busqueda: string = '';


  pacientes = [
    {
      nombre: 'Rocky',
      tratamiento: 'Cirugía de Cadera',
      prioridad: 'Alta',
      recuperacion: 90
    },
    {
      nombre: 'Mika',
      tratamiento: 'Vacunación Anual',
      prioridad: 'Media',
      recuperacion: 75
    },
    {
      nombre: 'Bruno',
      tratamiento: 'Tratamiento Dermatológico',
      prioridad: 'Baja',
      recuperacion: 100
    },
    {
      nombre: 'Lola',
      tratamiento: 'Urgencia por Ingesta',
      prioridad: 'Alta',
      recuperacion: 40
    }
  ];

  // Lógica para filtrar la lista según lo que se escriba en el buscador
  get pacientesFiltrados() {
    return this.pacientes.filter(p =>
      p.nombre.toLowerCase().includes(this.busqueda.toLowerCase())
    );
  }
}