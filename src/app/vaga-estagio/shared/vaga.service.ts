import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Vagas } from './vaga';
import { AngularFirestoreCollection } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class VagaService {

  constructor(private db: AngularFireDatabase, private firestore: AngularFirestore) { }

  Inserir(vaga: Vagas){
    //this.db.list('vagas').push(vaga)
    this.firestore.collection('estagios').add({
      curso: vaga.curso,
      empresa: vaga.empresa,
      nome_vaga: vaga.nome_vaga,
      bolsa: vaga.bolsa,
      email: vaga.email,
      endereco: vaga.endereco,
      telefone: vaga.telefone,
      prereq: vaga.prereq,
      descricao: vaga.descricao
    })
    return true;
  }

  Editar(id: string, vaga: Vagas)
  {
    this.firestore.collection('estagios', ref => ref.where('bolsa', '==', id)).add({
      curso: vaga.curso,
      empresa: vaga.empresa,
      nome_vaga: vaga.nome_vaga,
      bolsa: vaga.bolsa,
      email: vaga.email,
      endereco: vaga.endereco,
      telefone: vaga.telefone,
      prereq: vaga.prereq,
      descricao: vaga.descricao
    })
    return true;
  }


  Listar(): AngularFirestoreCollection<any>{
    // return this.db.list('vagas')
    //   .snapshotChanges()
    //   .pipe(
    //     map( changes => {
    //       return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    //     })
    //   );

    return  this.firestore.collection('estagios')
  }

  Procurar(curso: string): AngularFirestoreCollection<any>{
    return this.firestore.collection('estagios', ref => ref.where('curso', '==', curso))
  }
} 
