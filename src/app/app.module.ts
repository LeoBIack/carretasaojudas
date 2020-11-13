import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
/* Angular Imports */
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GerenciadorInserirComponent } from './Gerenciador/gerenciador-inserir/gerenciador-inserir.component';
import { GerenciadorListaComponent } from './Gerenciador/gerenciador-lista/gerenciador-lista.component';
import { NavComponent } from './template/nav/nav.component';
import { HeaderComponent } from './template/header/header.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    GerenciadorInserirComponent,
    GerenciadorListaComponent,
    NavComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatExpansionModule,
    MatSidenavModule,
    MatTabsModule,
    MatListModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
