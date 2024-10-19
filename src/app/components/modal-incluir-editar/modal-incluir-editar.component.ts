import { Component, inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Livro } from '../../interfaces/livro';
import { CrudLivrosService } from '../../services/crud-livros.service';
import { ModalGenericoComponent } from '../../shared/components/modal-generico/modal-generico.component';

@Component({
  selector: 'app-modal-incluir-editar',
  templateUrl: './modal-incluir-editar.component.html',
  styleUrl: './modal-incluir-editar.component.scss'
})
export class ModalIncluirEditarComponent implements OnInit {

  @Input() livro!: Livro;
  @Input() novoId!: string;

  activeModal = inject(NgbActiveModal);
  edicao = false;

  constructor(
    private _crudLivrosService: CrudLivrosService,
    private _modalService: NgbModal
  ) { }

  ngOnInit() {
    if (this.livro) {
      this.edicao = true;
      this.preencherFormulario()
    }
  }

  formulario = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    descricao: new FormControl('', [Validators.required, Validators.minLength(3)]),
    preco: new FormControl(0, [Validators.required, Validators.min(1)]),
    autor: new FormControl('', [Validators.required, Validators.minLength(3)])
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
      id: this.edicao ? this.livro.id : this.novoId.toString(),
      nome: this.formulario.get('nome')?.value as string,
      descricao: this.formulario.get('descricao')?.value as string,
      preco: Number(this.formulario.get('preco')?.value),
      autor: this.formulario.get('autor')?.value as string
    }

    if (this.formulario.valid) {
      if (this.edicao) {
        this._crudLivrosService.editarLivro(obj).subscribe({
          next: () => {
            const modalRef = this._modalService.open(ModalGenericoComponent)
            modalRef.componentInstance.mensagem = "Livro alterado com sucesso";
            modalRef.componentInstance.class = 'success';
            this.activeModal.close();
          }
        })
      } else {
        this._crudLivrosService.incluirLivro(obj).subscribe({
          next: () => {
            const modalRef = this._modalService.open(ModalGenericoComponent)
            modalRef.componentInstance.mensagem = "Livro incluído com sucesso";
            modalRef.componentInstance.class = 'success';
            this.activeModal.close();
          }
        })
      }
    }

  }
}
