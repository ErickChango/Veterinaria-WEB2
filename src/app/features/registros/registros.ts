import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { HeroComponent } from '../../share/hero/hero';
import { Formulario } from '../../share/formulario/formulario';

// 1. IMPORTA TU COMPONENTE FORMULARIO
// (Asegúrate de que la ruta sea correcta. Si está en 'shared', ajusta los ../)


@Component({
  selector: 'app-registros',
  standalone: true,
  // 2. AGRÉGALO A LA LISTA DE IMPORTS
  imports: [CommonModule, FormsModule, HeroComponent, Formulario], 
  templateUrl: './registros.html',
  styleUrl: './registros.css'
})
export class RegistrosComponent {
  // Tu lógica de registros...
}