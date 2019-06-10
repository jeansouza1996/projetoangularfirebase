import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../shared/funcionario.service';
import { ToastrService } from 'ngx-toastr';
import { Funcionario } from '../shared/funcionario.model';

@Component({
  selector: 'app-funcionario-list',
  templateUrl: './funcionario-list.component.html',
  styleUrls: ['./funcionario-list.component.css']
})
export class FuncionarioListComponent implements OnInit {
  funcionarioList: Funcionario[];

  constructor(private funcionarioService: FuncionarioService, private tostr: ToastrService) { }

  ngOnInit()  { 
    var x = this.funcionarioService.getData();
    x.snapshotChanges().subscribe(item => {
      this.funcionarioList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.funcionarioList.push(y as Funcionario);
      });
    });
  }

  onEdit(emp: Funcionario) {
    this.funcionarioService.selectedFuncionario = Object.assign({}, emp);
  }

  onDelete(key: string) {
    if (confirm('Voce realmente quer excluir esse registro ?') == true) {
      this.funcionarioService.deleteFuncionario(key);
      this.tostr.warning("Deletado com sucesso", "Funcionario Cadastro");
    }
  }
  } 


