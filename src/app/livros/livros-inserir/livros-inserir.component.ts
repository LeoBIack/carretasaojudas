//import { Component, EventEmitter, Output } from '@angular/core';
import { Component, OnInit, Input  } from '@angular/core';
import { NgForm } from '@angular/forms';
//import { Livro } from '../livro.model';
import { LivroService } from '../livro.service';

@Component({
  selector: 'app-livros-inserir',
  templateUrl: './livros-inserir.component.html',
  styleUrls: ['./livros-inserir.component.css'],
})
export class LivrosInserirComponent {

  constructor (public livroService: LivroService){

  }

  //@Output()  livroInserido = new EventEmitter<Livro>();

  //id: number;
  //titulo: string;
  //autor: string;
  //numeroDePaginas: string;


  onInserirLivro(form: NgForm){

    if (form.invalid) return;

    this.livroService.inserirLivros(
      form.value.id,
      form.value.titulo,
      form.value.autor,
      form.value.numeroDePaginas
    )
    form.resetForm();

    //const livro: Livro = {
    //  id: getRandomString(Number),
    //  titulo: form.value.titulo,
    //  autor: form.value.autor,
    //  numeroDePaginas: form.value.numeroDePaginas
    //}

    //this.livroInserido.emit(livro);

  }

}

/*  var idNovo: number = 0;

function getRandomString(number) {
  var result: number;
  var num: number = 1;

  num = 1;
  result = idNovo + 1;

  idNovo = result;

  return result;
}*/
