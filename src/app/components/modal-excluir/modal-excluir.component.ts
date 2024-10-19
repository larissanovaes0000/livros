import { Component, inject, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CrudLivrosService } from '../../services/crud-livros.service';
import { Livro } from '../../interfaces/livro';
import { ModalGenericoComponent } from '../../shared/components/modal-generico/modal-generico.component';

@Component({
  selector: 'app-modal-excluir',
  templateUrl: './modal-excluir.component.html',
  styleUrl: './modal-excluir.component.scss'
})
export class ModalExcluirComponent {
  activeModal = inject(NgbActiveModal);

  @Input() livro!: Livro

  constructor(
    private _crudLivrosService: CrudLivrosService,
    private _modalService: NgbModal
  ) { }

  excluir() {
    this._crudLivrosService.excluirLivro(this.livro).subscribe({
      next: () => {
        const modalRef = this._modalService.open(ModalGenericoComponent)
        modalRef.componentInstance.mensagem = "Livro excluído com sucesso";
        modalRef.componentInstance.class = 'success';
        this.activeModal.close();
        this.activeModal.close();
      }
    })
  }
}
