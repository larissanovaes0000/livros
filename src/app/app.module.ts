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
import { ModalIncluirComponent } from './components/modal-incluir/modal-incluir.component';
import { ModalExcluirComponent } from './components/modal-excluir/modal-excluir.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModalIncluirComponent,
    ModalExcluirComponent,
  ],
  imports: [
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    NgbModalModule,
    ReactiveFormsModule
  ],
  providers: [
    CrudLivrosService,
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
