import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle-mascota',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle-mascotas.html',
  styleUrl: './detalle-mascotas.css'
})
export class DetalleMascotaComponent {

  @Input() mascota: any;


  @Output() avisar = new EventEmitter<string>();


  avisarIngreso() {
    if (this.mascota) {
  
      this.avisar.emit(`El paciente ${this.mascota.nombre} ha ingresado a consulta.`);
    }
  }

}