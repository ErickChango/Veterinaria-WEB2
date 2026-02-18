import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalleMascotaComponent } from '../../share/detalle-mascotas/detalle-mascotas';


export interface Paciente {
  id: number;
  nombre: string;
  especie: string;
  historial: string;
  imagen: string;
  prioridad: string;
}

@Component({
  selector: 'app-consulta',
  standalone: true,
  imports: [CommonModule, DetalleMascotaComponent], 
  templateUrl: './consulta.html',
  styleUrl: './consulta.css'
})
export class ConsultaComponent {

  mensajeActivo: string = '👨‍⚕️ El Dr. Alejandro está disponible para consultas.';
  pacienteSeleccionado: Paciente | null = null;

  // Datos de prueba (Fíjate que ahora son del tipo 'Paciente')
  pacientes: Paciente[] = [
    { 
      id: 1, 
      nombre: 'Ramon', 
      especie: 'Perro', 
      historial: 'Vacunas al día. Alergia al pollo.', 
      imagen: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=200', 
      prioridad: 'Media' 
    },
    { 
      id: 2, 
      nombre: 'Lucky', 
      especie: 'Gato', 
      historial: 'Dolor estomacal severo.', 
      imagen: 'https://images.unsplash.com/photo-1529778873920-4da4926a7071?auto=format&fit=crop&q=80&w=200', 
      prioridad: 'Alta' 
    },
    { 
      id: 3, 
      nombre: 'Valentina', 
      especie: 'Gato', 
      historial: 'Revisión post-operatoria.', 
      imagen: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&q=80&w=200', 
      prioridad: 'Baja' 
    }
  ];

  seleccionarPaciente(paciente: Paciente) {
    this.pacienteSeleccionado = paciente;
    this.mensajeActivo = `📂 Revisando historial de ${paciente.nombre}...`;
  }

  procesarAviso(texto: string) {
    alert(texto);
  }
}