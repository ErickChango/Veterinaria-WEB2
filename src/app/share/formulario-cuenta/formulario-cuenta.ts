import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { UsuarioServicio, Usuario } from '../../services/usuario-servicio';
import { AuthService } from '../../services/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-cuenta',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario-cuenta.html',
  styleUrl: './formulario-cuenta.css',
})
export class FormularioCuenta {
  private fb = inject(FormBuilder);
  private usuarioServicio = inject(UsuarioServicio);
  private authService = inject(AuthService);
  private router = inject(Router);

  //validacion
  reglaEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
  reglaPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  formCuenta = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(this.reglaEmail)]],
    password: ['', [Validators.required, Validators.pattern(this.reglaPassword)]],
    repeatPassword: ['', [Validators.required]]
  }, { validators: this.validarClaves });

  validarClaves(control: AbstractControl): ValidationErrors | null {
    const clave = control.get('password')?.value;
    const claveR = control.get('repeatPassword')?.value;
    return clave === claveR ? null : { noCoinciden: true };
  }

  mostrarError(campo: string, tipoError: string): boolean {
    const input = this.formCuenta.get(campo);

    if (input && input.invalid && input.touched) {
      return input.hasError(tipoError);
    }
    return false;
  }

  registrar() {
    if (this.formCuenta.valid) {
      const email = this.formCuenta.value.email!;
      const password = this.formCuenta.value.password!;

      // 1. Crear usuario en Firebase Authentication
      this.authService.registro(email, password)
        .then(() => {
          const nuevoUsuario: Usuario = {
            name: 'Nuevo Usuario',
            email: email,
            phone: '00000000',
          };

          // 2. Guardar datos adicionales en la base de datos
          this.usuarioServicio.postUsuario(nuevoUsuario).subscribe({
            next: (res) => {
              console.log(`La cuenta creada es`, res);
              alert('Registro exitoso');
              this.formCuenta.reset();
              this.router.navigate(['/home']);
            },
            error: (err) => {
              console.error('Error al guardar datos de usuario', err);
              alert('Usuario creado en Auth, pero error al guardar datos adicionales');
            }
          });
        })
        .catch(err => {
          console.error('Error al crear cuenta en Firebase', err);
          alert('Error al crear la cuenta: ' + err.message);
        });
    }
  }
}
