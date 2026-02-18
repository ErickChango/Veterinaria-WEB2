import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

// 1. INTERFAZ ESTRICTA (El "contrato" de datos)
// Definimos exactamente qué campos tiene un usuario.
export interface Usuario {
  id?: string;       
  name: string;     
  email: string;
  phone: string;     
  username?: string; 
  website?: string;  
}

@Injectable({
  providedIn: 'root',
})
export class UsuarioServicio {
  
  private http = inject(HttpClient);
  private API_URL = 'https://app-crud-68fd3-default-rtdb.firebaseio.com';


  // 2. GET: Devuelve una LISTA de Usuarios (Usuario[])
  // Ya no usamos 'any', ahora prometemos que devolveremos un array de Usuario
  //getUsuarios(): Observable<Usuario[]> {
      //return this.http.get<Usuario[]>(this.API_URL);
  //}

  //Método Get
getUsuarios():Observable<Usuario[]>{
  return this.http.get<{[key:string]:Usuario}>(`${this.API_URL}/usuarios.json`).pipe(
    map(respuesta =>{
      if(!respuesta){
        return [];
      }
      return Object.keys(respuesta).map(id=>{
        const usuarioConId={ ...respuesta[id], id:id};
        return usuarioConId;
      });
    })
  )
}
  
  // 3. GET: Devuelve UN solo Usuario
  getUsuario(id: number): Observable<Usuario> {
      return this.http.get<Usuario>(`${this.API_URL}/${id}`);
  }

  // 4. POST: Recibe un Usuario estricto y devuelve el Usuario creado
  // TypeScript te gritará en rojo si intentas enviar algo que no sea un Usuario
postUsuario(usuario:Usuario):Observable<Usuario>{
  return this.http.post<Usuario>(`${this.API_URL}/usuarios.json`, usuario);
}
//Método buscarPorId
getUsuarioById(id: string): Observable<Usuario> {
  return this.http.get<Usuario>(`${this.API_URL}/usuarios/${id}.json`);
}

//Método put
putUsuario(id: string, usuario: Usuario): Observable<Usuario> {
  return this.http.put<Usuario>(`${this.API_URL}/usuarios/${id}.json`, 
  usuario);
}
// Método delete
deleteUsuario(id: string): Observable<void> {
  return this.http.delete<void>(`${this.API_URL}/usuarios/${id}.json`);
}
}
