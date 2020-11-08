import { Component, OnInit, Input  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LembreteService } from '../lembrete.service';

@Component({
  selector: 'app-gerenciador-inserir',
  templateUrl: './gerenciador-inserir.component.html',
  styleUrls: ['./gerenciador-inserir.component.css']
})
export class GerenciadorInserirComponent{

  constructor(public lembreteService: LembreteService) {}

  onInserirLembrete(form: NgForm){

    if (form.invalid) return;

    this.lembreteService.inserirLembrete(
      form.value.titulo,
      form.value.dataComeco,
      form.value.dataTermino,
      form.value.atividade
    )
    form.resetForm();
  }

}
