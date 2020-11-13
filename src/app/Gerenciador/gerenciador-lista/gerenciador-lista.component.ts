import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Lembrete } from '../lembrete.model'
import { LembreteService } from '../lembrete.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-gerenciador-lista',
  templateUrl: './gerenciador-lista.component.html',
  styleUrls: ['./gerenciador-lista.component.css']
})
export class GerenciadorListaComponent implements OnInit {

  lembretes: Lembrete[] = [];
  private lembreteSubscription: Subscription;

  constructor(public lembreteService: LembreteService) {

  }

  ngOnInit(): void {
    this.lembreteService.getLembretes();

    this.lembreteSubscription = this.lembreteService.getListalembreteAtualizadoObservable().subscribe(
      (lembretes: Lembrete[]) => {
        this.lembretes =  lembretes;
      }
    );
  }

  ngOnDestroy(): void{
    this.lembreteSubscription.unsubscribe();
  }
}
