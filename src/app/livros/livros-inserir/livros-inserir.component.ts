import { Component, EventEmitter, Output } from '@angular/core';
import { Livro } from '../livro.model';

@Component({
  selector: 'app-livros-inserir',
  templateUrl: './livros-inserir.component.html',
  styleUrls: ['./livros-inserir.component.css']
})
export class LivrosInserirComponent {

  @Output()  livroInserido = new EventEmitter<Livro>();

  id: number;
  titulo: string;
  autor: string;
  numeroDePaginas: string;


  onInserirLivro(){

    const livro: Livro = {
      id: getRandomString(Number),
      titulo: this.titulo,
      autor: this.autor,
      numeroDePaginas: this.numeroDePaginas
    }

    this.livroInserido.emit(livro);

    this.titulo = '';
    this.autor = '';
    this.numeroDePaginas = '';

  }

}

  var idNovo: number = 0;
  var num: number;

function getRandomString(number) {
  var result: number;

  num = 1;
  result = idNovo + 1;

  idNovo = result;

  return result;
}
