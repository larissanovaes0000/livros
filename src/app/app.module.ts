import { NgModule } from '@angular/core';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CrudLivrosService } from './services/crud-livros.service';
import { CommonModule } from '@angular/common';
import { ErrorInterceptor } from '../interceptors/error.interceptor';
import { ModalErroComponent } from './shared/components/modal-erro/modal-erro.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModalErroComponent
  ],
  imports: [
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    NgbModalModule
  ],
  providers: [
    CrudLivrosService,
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
