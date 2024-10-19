import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ErrorInterceptor } from '../interceptors/error.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CrudLivrosService } from './services/crud-livros.service';
import { ModalExcluirComponent } from './components/modal-excluir/modal-excluir.component';
import { ModalIncluirEditarComponent } from './components/modal-incluir-editar/modal-incluir-editar.component';
import { ModalGenericoComponent } from './shared/components/modal-generico/modal-generico.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModalExcluirComponent,
    ModalIncluirEditarComponent,
    ModalGenericoComponent,
  ],
  imports: [
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    NgbModalModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  providers: [
    CrudLivrosService,
    provideNgxMask(),
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
