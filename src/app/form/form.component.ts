import { Component, OnInit } from '@angular/core';
import {Cliente} from '../cliente';
import {ServicoService} from '../servico.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  private cliente:Cliente={id:undefined, nome:undefined, idade:undefined};
  constructor(private servico:ServicoService) { }
  add():void {
    this.servico.add(this.cliente);
    this.cliente.id= undefined;
    this.cliente.nome= undefined;
    this.cliente.idade= undefined;
  }
  ngOnInit() {
  }

}