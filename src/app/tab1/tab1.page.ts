import { Component, OnInit } from '@angular/core';
import { Vagas } from '../vaga-estagio/shared/vaga';
import { VagaService } from '../vaga-estagio/shared/vaga.service';
import { VagaDataService } from '../vaga-estagio/shared//vaga-data.service';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  vaga: Vagas;
  key: string= '';
  id: string = '';
  constructor( private vagaService: VagaService, private vagaDataService: VagaDataService, public alertController: AlertController, private activatedRoute: ActivatedRoute) {}

  ngOnInit(){
    this.vaga = new Vagas();
    console.log(this.id);
  }

  async  onSubmit(){
    if (this.id == ''){
      if (this.vagaService.Inserir(this.vaga)){
        const alert = await this.alertController.create({         
          message: 'Cadastrado com sucesso',
          buttons: ['OK']
        });
    
         await alert.present();
      }
      else{
        const alert = await this.alertController.create({         
          message: 'Erro ao cadastrar',
          buttons: ['OK']
        });
    
         await alert.present();
      }
    }
    else  {
      if (this.vagaService.Editar(this.id,this.vaga)){
        const alert = await this.alertController.create({         
          message: 'Editado com sucesso',
          buttons: ['OK']
        });
    
         await alert.present();
      }
      else{
        const alert = await this.alertController.create({         
          message: 'Erro ao editar',
          buttons: ['OK']
        });
    
         await alert.present();
      }
    } 
      this.vaga = new Vagas();
  }
}
