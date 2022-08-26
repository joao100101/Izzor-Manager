import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { mensagem } from 'src/app/app.component';
import { Class } from 'src/app/components/snackTypes';
import { Usuario } from '../account.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: Usuario = {
    nome: '',
    role: '',
    email: '',
    senha: ''
  }

  constructor(private service: AuthService, private snack: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['']);
    this.service.teste();
  }

  logar() {
    let hashedEmail = this.service.getHash(String(this.user.email));
    let hashedPassword = this.service.getHash(String(this.user.senha));
    this.service.getUserByEmail(String(this.user.email)).subscribe(res => {
      if (res.length > 0) {
        if (res[0].email == hashedEmail && res[0].senha == hashedPassword) {
          mensagem("Logado com sucesso.", Class.OK, this.snack);
          this.service.setLogado();
        } else {
          mensagem("Credenciais incorretas ou inexistentes.", Class.ERRO, this.snack);
        }
      } else {
        mensagem("Credenciais incorretas ou inexistentes.", Class.ERRO, this.snack);
      }
    })



  }
}
