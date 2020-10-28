import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Livro } from './livro.model';

@Injectable({
  providedIn: 'root'
})

export class LivroService {

  constructor() {}

  private listaLivrosAtualizado = new Subject<Livro[]>();

  private livros: Livro [] = [];

  getLivros(): Livro[] {
    return [...this.livros];
  }

  inserirLivros (id:number, titulo: string, autor: string, numeroDePaginas: string): void{
    const livro: Livro = {
      id: getRandomString(Number),
      titulo: titulo,
      autor: autor,
      numeroDePaginas: numeroDePaginas
    };
    this.livros.push(livro);

    this.listaLivrosAtualizado.next([...this.livros]);
  }

  getListaLivrosAtualizadoObservable(){
    return this.listaLivrosAtualizado.asObservable();
  }

}

var idNovo: number = 0;

function getRandomString(number) {
  var result: number;
  var num: number = 1;

  num = 1;
  result = idNovo + 1;

  idNovo = result;

  return result;
}

