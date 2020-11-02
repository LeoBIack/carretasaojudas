import { Component } from '@angular/core';
import { Livro } from './livros/livro.model';
import { Lembrete } from './Gerenciador/lembrete.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gerenciador de Atividades';

  livros: Livro[] = []

  onLivroInserido(livro) {
    this.livros = [ ...this.livros, livro]
  }

}
