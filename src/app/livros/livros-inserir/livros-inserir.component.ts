import { Component, OnInit, Input  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LivroService } from '../livro.service';

@Component({
  selector: 'app-livros-inserir',
  templateUrl: './livros-inserir.component.html',
  styleUrls: ['./livros-inserir.component.css'],
})
export class LivrosInserirComponent {

  constructor (public livroService: LivroService){

  }

  onInserirLivro(form: NgForm){

    if (form.invalid) return;

    this.livroService.inserirLivros(
      form.value.id,
      form.value.titulo,
      form.value.autor,
      form.value.numeroDePaginas
    )
    form.resetForm();

  }

}
