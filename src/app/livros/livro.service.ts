import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';
import { Livro } from './livro.model';

@Injectable({
  providedIn: 'root'
})

export class LivroService {

  constructor(private httpClient : HttpClient) {

  }

  private listaLivrosAtualizado = new Subject<Livro[]>();

  private livros: Livro [] = [];

  getLivros(): void {
    this.httpClient.get<{mensagem : string, livros: Livro[]}>(
    'http://localhost:3000/api/livros'
      ).subscribe((dados) => {
     this.livros = dados.livros
         this.listaLivrosAtualizado.next([...this.livros])
           })
            //return [...this.clientes];
          }
          
  inserirLivros (id:number, titulo: string, autor: string, numeroDePaginas: string): void{
    const livro: Livro = {
      id: getRandomString(Number),
      titulo: titulo,
      autor: autor,
      numeroDePaginas: numeroDePaginas
    };
    this.httpClient.post<{mensagem: string}>(
      'http://localhost:3000/api/livros',
            livro
          ).subscribe((dados) => {
            console.log(dados.mensagem)
            this.livros.push(livro);
            this.listaLivrosAtualizado.next([...this.livros]);
          })
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

