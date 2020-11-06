import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Livro } from '../livro.model'
import { LivroService } from '../livro.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-livros-lista',
  templateUrl: './livros-lista.component.html',
  styleUrls: ['./livros-lista.component.css']
})
export class LivrosListaComponent implements OnInit, OnDestroy {

  livros: Livro[] = [];
  private livroSubscription: Subscription;

  constructor(public livroService: LivroService) {

  }

  ngOnInit(): void {
    this.livroService.getLivros();

    this.livroSubscription = this.livroService.getListaLivrosAtualizadoObservable().subscribe(
      (livros: Livro[]) => {
        this.livros =  livros;
      }
    );
  }

  ngOnDestroy(): void{
    this.livroSubscription.unsubscribe();
  }

}
