import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertComponent } from './components/alert/alert.component';
import { ModalErroComponent } from './components/modal-erro/modal-erro.component';

@NgModule({
  declarations: [
    AlertComponent,
    ModalErroComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
