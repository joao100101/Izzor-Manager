import { Injectable } from '@angular/core';
import * as sha from 'sha.js'
import { Usuario } from "./account.model"
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { mensagem } from 'src/app/app.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private logado: boolean = false;
  private baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  teste() {
  }

  isLogado(): boolean {
    return this.logado;
  }

  checkToken() {

  }

  gerarToken(): String {

    return ''
  }

  setLogado(state: boolean){
    this.logado = state;
  }

  getHash(text: string): String {
    return sha('sha256').update(text).digest('hex');
  }


  getUserByEmail(email: string): Observable<Usuario[]> {
    let shaMail = this.getHash(email);
    const url = `${this.baseUrl}/contas?email=${shaMail}`
    return this.http.get<Usuario[]>(url);
  }

  checkCredentials(email: string, senha: string): boolean {

    var hashedEmail: String, hashedPassword: String;

    hashedEmail = this.getHash(email);
    hashedPassword = this.getHash(senha);

    this.getUserByEmail(email).subscribe(res => {
      console.log(res[0])
      return hashedEmail == res[0].email && hashedPassword == res[0].senha;
    })

    return false;
  }

}
