import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


import { NavBarComponent } from '../../share/nav-bar/nav-bar';
import { HeroComponent } from '../../share/hero/hero';
import { PacientesComponent } from '../../share/pacientes/pacientes';


@Component({
  selector: 'app-home',
  standalone: true,
  
  imports: [
    CommonModule, 
    NavBarComponent, 
    HeroComponent, 
    PacientesComponent
  ], 
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
}