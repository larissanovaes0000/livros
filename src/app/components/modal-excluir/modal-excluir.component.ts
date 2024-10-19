import { Component, inject, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CrudLivrosService } from '../../services/crud-livros.service';
import { Livro } from '../../interfaces/livro';

@Component({
  selector: 'app-modal-excluir',
  templateUrl: './modal-excluir.component.html',
  styleUrl: './modal-excluir.component.scss'
})
export class ModalExcluirComponent {
  activeModal = inject(NgbActiveModal);

  @Input() livro!: Livro

  constructor(private _crudLivrosService: CrudLivrosService,) { }

  excluir() {
    this._crudLivrosService.excluirLivro(this.livro).subscribe({
      next: () => this.activeModal.close()
    })
  }
}
