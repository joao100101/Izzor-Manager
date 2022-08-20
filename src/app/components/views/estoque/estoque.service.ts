import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CategoriaEstoque } from './categoriaEstoque.model';

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {
  baseURL = environment.baseUrl;
  constructor(private http: HttpClient) { }

  criar(cat: CategoriaEstoque): Observable<CategoriaEstoque> {
    const url = `${this.baseURL}/estoque`;
    return this.http.post<CategoriaEstoque>(url, cat);
  }

  update(cat: CategoriaEstoque): Observable<CategoriaEstoque> {
    let id = cat.id;
    const url = `${this.baseURL}/estoque/${id}`
    return this.http.put<CategoriaEstoque>(url, cat);
  }

  remove(id: String): Observable<void> {
    const url = `${this.baseURL}/estoque/${id}`
    return this.http.delete<void>(url);
  }

  findAll(): Observable<CategoriaEstoque[]> {
    const url = `${this.baseURL}/estoque`
    return this.http.get<CategoriaEstoque[]>(url);
  }
  findByID(id: String): Observable<CategoriaEstoque> {
    let url = `${this.baseURL}/estoque/${id}`
    return this.http.get<CategoriaEstoque>(url);
  }
}
