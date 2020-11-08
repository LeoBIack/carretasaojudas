import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { GerenciadorInserirComponent } from './Gerenciador/gerenciador-inserir/gerenciador-inserir.component';
import { GerenciadorListaComponent } from './Gerenciador/gerenciador-lista/gerenciador-lista.component';

const routes: Routes = [{
    path: "",
    component: GerenciadorInserirComponent
  },{
    path: "MenuListaDeLembretes",
    component: GerenciadorListaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
