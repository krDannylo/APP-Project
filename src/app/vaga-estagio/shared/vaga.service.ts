import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map, concatAll, filter, toArray } from 'rxjs/operators';
import { Vagas } from './vaga'

@Injectable({
  providedIn: 'root'
})
export class VagaService {

  constructor(private db: AngularFireDatabase) { }

  Inserir(vaga: Vagas){
    this.db.list('vagas').push(vaga)
  }

  Listar() {
    return this.db.list('vagas')
      .snapshotChanges()
      .pipe(
        map( changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        })
      );
  }

  Procurar(vaga: Vagas) {
    return this.db.list('vagas')
     .snapshotChanges()
      .pipe(
        map( changes => {
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
          return changes.filter(c => c.payload.val() == vaga.curso)
        })
      );
  }
} 
