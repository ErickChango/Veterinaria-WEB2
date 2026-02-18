import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HomeComponent } from './features/home/home';
import { NavBarComponent } from './share/nav-bar/nav-bar';

import { FooterComponent } from './share/footer/footer'; 
import { PacientesComponent } from './share/pacientes/pacientes';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [
    RouterOutlet,
    HomeComponent,
    NavBarComponent,
    FooterComponent,
    
    PacientesComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'veterinaria';
}