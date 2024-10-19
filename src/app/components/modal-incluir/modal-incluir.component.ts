import { Component, inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CrudLivrosService } from '../../services/crud-livros.service';
import { Livro } from '../../interfaces/livro';
import { Router } from '@angular/router';


@Component({
  selector: 'app-modal-incluir',
  templateUrl: './modal-incluir.component.html',
  styleUrl: './modal-incluir.component.scss'
})
export class ModalIncluirComponent implements OnInit {
  activeModal = inject(NgbActiveModal);

  @Input() livro!: Livro;
  @Input() novoId!: string;

  edicao = false;

  constructor(
    private _crudLivrosService: CrudLivrosService,
    private _router: Router
  ) { }

  ngOnInit() {
    if (this.livro) {
      this.edicao = true;
      this.preencherFormulario()
    }
  }

  formulario = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    descricao: new FormControl('', [Validators.required]),
    preco: new FormControl(0, [Validators.required]),
    autor: new FormControl('', [Validators.required])
  });

  preencherFormulario() {
    if (this.edicao) {
      this.formulario.get('nome')?.setValue(this.livro.nome);
      this.formulario.get('descricao')?.setValue(this.livro.descricao)
      this.formulario.get('preco')?.setValue(this.livro.preco)
      this.formulario.get('autor')?.setValue(this.livro.autor)
    }
  }

  salvar() {
    const obj: Livro = {
      id: this.edicao? this.livro.id : this.novoId.toString(),
      nome: this.formulario.get('nome')?.value as string,
      descricao: this.formulario.get('descricao')?.value as string,
      preco: Number(this.formulario.get('preco')?.value),
      autor: this.formulario.get('autor')?.value as string
    }

    if (this.formulario.valid) {
      if (this.edicao) {
        this._crudLivrosService.editarLivro(obj).subscribe({
          next: () => {
            this.activeModal.close();
          }
        })
      } else {
        this._crudLivrosService.incluirLivro(obj).subscribe({
          next: () => {
            this.activeModal.close();
          }
        })
      }
    }

  }
}
