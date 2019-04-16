import { Injectable } from '@angular/core';
import {Cliente} from './cliente';

@Injectable() //Decorator
export class ServicoService {
  private lista:Cliente[]=[];
  add(cliente:Cliente):void {
    let c:Cliente= {
      id:cliente.id,
      nome:cliente.nome,
      idade:cliente.idade
    };
    this.lista.push(c);
  }
  constructor() { }

}