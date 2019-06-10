import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../shared/funcionario.service';

import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']

  
})
export class FuncionarioComponent implements OnInit {

  constructor(private funcionarioService : FuncionarioService,private tostr: ToastrService) { }

  ngOnInit() {
  this.resetForm();
  } 
  onSubmit(funcionarioForm: NgForm) {
    if (funcionarioForm.value.$key == null)
      this.funcionarioService.insertFuncionario(funcionarioForm.value);
    else
      this.funcionarioService.updateFuncionario(funcionarioForm.value);
    this.resetForm(funcionarioForm);
    this.tostr.success('Submitted Succcessfully', 'Funcionario Cadastrado');
  }

  resetForm(funcionarioForm?: NgForm) {
    if (funcionarioForm != null)
      funcionarioForm.reset();
    this.funcionarioService.selectedFuncionario = {
      $key: null,
      nome: '',
      cargo: '',
      departamento: '',
      salario: 0,
    }
  }

}
