import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Denuncia } from '../denuncias/denuncia';
import {DenunciasService} from '../denuncias.service'
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-list-denuncias',
  templateUrl: './list-denuncias.component.html',
  styleUrls: ['./list-denuncias.component.scss']
})
export class ListDenunciasComponent implements OnInit {
  @Input() listDenuncia : Denuncia[]
  @Output() selectedDenuncia = new EventEmitter<Denuncia>()
  constructor(private route: ActivatedRoute, private denuncasService : DenunciasService ) { }

  ngOnInit() {
    console.log(this.listDenuncia)
  }
  detailHandler(denuncia : Denuncia){
    console.log(denuncia)
    this.selectedDenuncia.emit(denuncia)
  }

  Archivar(denuncia :Denuncia){
    this.denuncasService.removeDenuncia(denuncia)
  }
}
