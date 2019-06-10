import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Funcionario} from './funcionario.model';

@Injectable()
export class FuncionarioService {
  funcionarioList: AngularFireList<any>;
  selectedFuncionario: Funcionario = new Funcionario();
  constructor(private firebase :AngularFireDatabase ) { }

  getData(){
    this.funcionarioList = this.firebase.list('funcionarios');
    return this.funcionarioList;
  }

  insertFuncionario(funcionario : Funcionario)
  {
    this.funcionarioList.push({
      nome: funcionario.nome,
      cargo: funcionario.cargo,
      departamento: funcionario.departamento,
      salario: funcionario.salario
    });
  }

  updateFuncionario(funcionario : Funcionario){
    this.funcionarioList.update(funcionario.$key,
      {
        nome: funcionario.nome,
        cargo: funcionario.cargo,
        departamento: funcionario.departamento,
        salario: funcionario.salario     
       });
  }

  deleteFuncionario($key : string){
    this.funcionarioList.remove($key);
  }

}
