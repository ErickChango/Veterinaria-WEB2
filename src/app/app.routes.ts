import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home';
import { ConsultaComponent } from './features/consulta/consulta';
import { AcercaComponent } from './features/acerca/acerca';
import { MascotasComponent } from './models/mascotas/mascotas';

// 1. IMPORTAMOS EL COMPONENTE CORRECTO
import { RegistrosComponent } from './features/registros/registros';
import { FormularioCuenta } from './share/formulario-cuenta/formulario-cuenta';
import { Login } from './share/login/login';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'consulta', component: ConsultaComponent },
    { path: 'mascotas', component: MascotasComponent },
    { path: 'acerca', component: AcercaComponent },
    { path: 'registros', component: RegistrosComponent },
    { path: 'formulario', component: FormularioCuenta },
    { path: 'login', component: Login },

    { path: '**', redirectTo: 'home' }
];