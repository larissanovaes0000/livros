import { Component, OnInit } from '@angular/core';
import { CrudLivrosService } from '../../services/crud-livros.service';
import { Livro } from '../../interfaces/livro';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  listaLivros!: Livro[];

  constructor(
    private _crudLivrosService: CrudLivrosService
  ) { }

  ngOnInit() {
    this.obterLivros()
  }

  obterLivros() {
    this._crudLivrosService.obterLivros().subscribe(res => {
      this.listaLivros = res
    })
  }

  editar(){}

  excluir(){}

}
