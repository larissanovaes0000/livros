import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ModalErroComponent } from '../app/shared/components/modal-erro/modal-erro.component';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private _modalService: NgbModal) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error) {
          this._modalService.open(ModalErroComponent)
        }
        return throwError(error);
      })
    );
  }
}
