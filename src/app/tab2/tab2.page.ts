import { Component, OnInit } from '@angular/core';
import { VagaService } from '../vaga-estagio/shared/vaga.service';
import { VagaDataService } from '../vaga-estagio/shared//vaga-data.service';
import { Observable } from 'rxjs';
import { TabsPage } from '../tabs/tabs.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  vagas: Observable<any>;
  curso: string='';
  public rootPage: any = TabsPage;

  constructor(private vagaService: VagaService, private vagaDataService: VagaDataService) {}

  ngOnInit(){
    this.vagas = this.vagaService.Listar().valueChanges();
  }

  onSubmit(){ 
    if (this.curso != ""){ this.vagas = this.vagaService.Procurar(this.curso).valueChanges(); } else{ this.vagas = this.vagaService.Listar().valueChanges(); }

  }
}
