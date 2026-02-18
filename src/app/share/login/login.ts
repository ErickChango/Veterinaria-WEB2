import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email: string = "";
  password: string = "";

  private servicioAuth = inject(AuthService);
  private router = inject(Router);

  iniciarSesion() {
    this.servicioAuth.login(this.email, this.password)
      .then(() => {
        alert("Inicio de sesión exitoso");
        this.router.navigate(['/home']);
      })
      .catch(err => {
        alert("Error al iniciar sesión: " + err.message);
      });
  }

  cerrarSesion() {
    this.servicioAuth.logout().then(() => {
      alert("Sesión cerrada exitosamente");
      this.router.navigate(['/home']);
    });
  }
}
