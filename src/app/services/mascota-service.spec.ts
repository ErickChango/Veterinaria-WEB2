import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/mascotas/pets';

@Injectable({
  providedIn: 'root'
})
export class MascotaService { 
  private http = inject(HttpClient);
  private API_PET = 'https://www.mockdog.dev/api/dogs';

  constructor() { }

  getMascotas(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.API_PET);
  }
}