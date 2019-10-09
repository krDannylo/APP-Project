import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ExibirVagaPage } from './exibir-vaga.page';

const routes: Routes = [
  {
    path: '',
    component: ExibirVagaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ExibirVagaPage]
})
export class ExibirVagaPageModule {}
