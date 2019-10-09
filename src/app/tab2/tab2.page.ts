import { Component, OnInit } from '@angular/core';
import { Vagas } from '../vaga-estagio/shared/vaga';
import { VagaService } from '../vaga-estagio/shared/vaga.service';
import { VagaDataService } from '../vaga-estagio/shared//vaga-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  vagas: Observable<any>;
  vaga = new Vagas();
  constructor(private vagaService: VagaService, private vagaDataService: VagaDataService) {}

  ngOnInit(){
    this.vaga = new Vagas();
    this.vagas = this.vagaService.Listar(); 
  }

  filtraCurso(curso){
    console.log(curso);
    this.vaga.curso = curso;
    this.vagas = this.vagaService.Procurar(curso);
  }
}
