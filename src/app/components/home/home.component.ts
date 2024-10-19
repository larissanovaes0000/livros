import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Livro } from '../../interfaces/livro';
import { CrudLivrosService } from '../../services/crud-livros.service';
import { ModalExcluirComponent } from '../modal-excluir/modal-excluir.component';
import { ModalIncluirEditarComponent } from '../modal-incluir-editar/modal-incluir-editar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  listaLivros!: Livro[];

  constructor(
    private _crudLivrosService: CrudLivrosService,
    private _modalService: NgbModal
  ) { }

  ngOnInit() {
    this.obterLivros()
  }

  obterLivros() {
    this._crudLivrosService.obterLivros().subscribe(res => {
      this.listaLivros = res
    })
  }

  excluir(livro: Livro) {
    const modalRef = this._modalService.open(ModalExcluirComponent);
    modalRef.componentInstance.livro = livro;
    modalRef.closed.subscribe(() => this.obterLivros());
  }

  abrirModal(livro?: Livro) {
    const modalRef = this._modalService.open(ModalIncluirEditarComponent);
    modalRef.componentInstance.livro = livro;
    modalRef.componentInstance.novoId = this.listaLivros.length + 1;
    modalRef.closed.subscribe(() => this.obterLivros())
  }
}
