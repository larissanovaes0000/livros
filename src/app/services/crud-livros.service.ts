import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Livro } from '../interfaces/livro';

@Injectable({
  providedIn: 'root'
})
export class CrudLivrosService {

  private readonly API = "http://localhost:3000/livros"

  constructor(
    private _http: HttpClient
  ) { }

  obterLivros(){
    return this._http.get<Livro[]>(this.API)
  }
}
