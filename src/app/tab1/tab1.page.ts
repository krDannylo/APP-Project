import { Component, OnInit } from '@angular/core';
import { Vagas } from '../vaga-estagio/shared/vaga';
import { VagaService } from '../vaga-estagio/shared/vaga.service';
import { VagaDataService } from '../vaga-estagio/shared//vaga-data.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  vaga: Vagas;
  key: string= '';
  constructor( private vagaService: VagaService, private vagaDataService: VagaDataService) {}

  ngOnInit(){
    this.vaga = new Vagas();
  }

  onSubmit(){
      this.vagaService.Inserir(this.vaga);
      this.vaga = new Vagas();
  }
}
