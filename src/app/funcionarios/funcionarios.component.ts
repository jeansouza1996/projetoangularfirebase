import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from './shared/funcionario.service'

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css'],
  providers: [FuncionarioService]
})
export class FuncionariosComponent implements OnInit {

  constructor(private funcionarioService : FuncionarioService) { }

  ngOnInit() {
  }

}
