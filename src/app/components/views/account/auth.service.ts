import { EventEmitter, Injectable, Output } from '@angular/core';
import * as sha from 'sha.js'
import { Usuario } from "./account.model"
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  @Output() logado = new EventEmitter<boolean>();
  private baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  teste() {
  }

  checkToken() {

  }

  gerarToken(): String {

    return ''
  }

  setLogado() {
    this.logado.emit(true);
  }

  getHash(text: string): String {
    return sha('sha256').update(text).digest('hex');
  }


  getUserByEmail(email: string): Observable<Usuario[]> {
    let shaMail = this.getHash(email);
    const url = `${this.baseUrl}/contas?email=${shaMail}`
    return this.http.get<Usuario[]>(url);
  }



}
