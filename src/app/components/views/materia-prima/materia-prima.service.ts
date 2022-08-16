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

  readAll(cat_id: String): Observable<MateriaPrima[]> {
    const url = `${this.baseUrl}/estocados?categoria_id=${cat_id}`
    return this.http.get<MateriaPrima[]>(url);
  }
  read(id: String): Observable<MateriaPrima> {
    const url = `${this.baseUrl}/estocados/${id}`;
    return this.http.get<MateriaPrima>(url);
  }
  create(mat: MateriaPrima): Observable<MateriaPrima> {
    const url = `${this.baseUrl}/estocados`
    return this.http.post<MateriaPrima>(url, mat);
  }

  remove(id: String): Observable<void> {
    const url = `${this.baseUrl}/estocados/${id}`
    return this.http.delete<void>(url);
  }

  update(mat: MateriaPrima): Observable<MateriaPrima> {
    const url = `${this.baseUrl}/estocados/${mat.id}`
    return this.http.put<MateriaPrima>(url, mat);
  }
}

