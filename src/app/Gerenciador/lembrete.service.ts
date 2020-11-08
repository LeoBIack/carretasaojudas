import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Lembrete } from './lembrete.model';


@Injectable({
  providedIn: 'root'
})
export class LembreteService {

  constructor() { }

  private listaLembreteAtualizado = new Subject<Lembrete[]>();

  private lembretes: Lembrete [] = [];

  getlembretes(): Lembrete[] {
    return [...this.lembretes];
  }

  inserirLembrete (titulo: string, dataComeco: string, dataTermino: string, atividade: string): void{
    const lembrete: Lembrete = {
      titulo: titulo,
      dataComeco: dataComeco,
      dataTermino: dataTermino,
      atividade: atividade
    };
    this.lembretes.push(lembrete);

    this.listaLembreteAtualizado.next([...this.lembretes]);
  }

  getListalembreteAtualizadoObservable(){
    return this.listaLembreteAtualizado.asObservable();
  }
}
