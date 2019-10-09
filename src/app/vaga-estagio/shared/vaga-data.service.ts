import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Vagas } from './vaga';

@Injectable({
  providedIn: 'root'
})
export class VagaDataService {
  private vagaSource = new BehaviorSubject({ vaga: null, key: '' });
  currentVaga = this.vagaSource.asObservable();

  constructor() { }

  mudaVaga(vaga : Vagas, key: string){
    this.vagaSource.next({ vaga: vaga, key: key });
  }
}
