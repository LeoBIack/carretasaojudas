import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';
import { Lembrete } from './lembrete.model';


@Injectable({
  providedIn: 'root'
})
export class LembreteService {

  constructor(private httpClient : HttpClient) {

  }

  private listaLembreteAtualizado = new Subject<Lembrete[]>();

  private lembretes: Lembrete [] = [];

  getLembretes(): void {
    this.httpClient.get<{mensagem : string, lembretes: Lembrete[]}>(
    'http://localhost:3000/api/lembretes'
      ).subscribe((dados) => {
     this.lembretes = dados.lembretes
         this.listaLembreteAtualizado.next([...this.lembretes])
           })
            //return [...this.clientes];
          }

  inserirLembrete (titulo: string, dataComeco: string, dataTermino: string, atividade: string): void{
    const lembrete: Lembrete = {
      titulo: titulo,
      dataComeco: dataComeco,
      dataTermino: dataTermino,
      atividade: atividade
    };

    this.httpClient.post<{mensagem: string}>(
      'http://localhost:3000/api/lembretes',
            lembrete
          ).subscribe((dados) => {
            console.log(dados.mensagem)
            this.lembretes.push(lembrete);
            this.listaLembreteAtualizado.next([...this.lembretes]);
          })
  }

  getListalembreteAtualizadoObservable(){
    return this.listaLembreteAtualizado.asObservable();
  }
}
