import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MateriaPrima } from './materia-prima.model';

@Injectable({
  providedIn: 'root'
})
export class MateriaPrimaService {
  baseUrl: String = environment.baseUrl;
  constructor(private http: HttpClient) { }


  addMaterial(mat: MateriaPrima): Observable<MateriaPrima>{
    let url = `${this.baseUrl}/estoque`
    return this.http.post<MateriaPrima>(url, mat);
  }
}

