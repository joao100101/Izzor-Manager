import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Class } from 'src/app/components/snackTypes';
import { ProdutoReadComponent } from '../produto-read/produto-read.component';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produto-delete',
  templateUrl: './produto-delete.component.html',
  styleUrls: ['./produto-delete.component.css']
})
export class ProdutoDeleteComponent implements OnInit {

  constructor(private service: ProdutoService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  close(){
    this.dialog.closeAll();
  }

  delete(): void{
    this.service.delete(ProdutoReadComponent.getId()).subscribe(() =>{
      
      this.close();
      window.location.reload();
      this.service.mensagem("Produto deletado com sucesso.", Class.OK);
    });
  }

}
