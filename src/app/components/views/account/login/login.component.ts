import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  constructor(private service: AuthService, private snack: MatSnackBar) { }

  ngOnInit(): void {
    this.service.teste();
  } 


  logar(){
    if(this.service.checkCredentials(String(this.user.email), String(this.user.senha))){
        mensagem("Logado com sucesso.", Class.OK, this.snack);
        this.service.setLogado(true);
    }else{
      mensagem("Credenciais incorretas.", Class.ERRO, this.snack);
    }
  }
}
