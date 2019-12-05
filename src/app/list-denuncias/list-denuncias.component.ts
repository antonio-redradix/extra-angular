import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Denuncia } from '../denuncia'
import { DenunciaService } from '../denuncia.service'

@Component({
  selector: 'app-list-denuncias',
  templateUrl: './list-denuncias.component.html',
  styleUrls: ['./list-denuncias.component.scss']
})
export class ListDenunciasComponent implements OnInit {
  @Input() denuncias: Denuncia[]
  @Output() denunciaClicked = new EventEmitter<Denuncia>()
  
  selectedDenuncia: Denuncia

  constructor(private denunciaService: DenunciaService) { }

  ngOnInit() {
  }

  clickHandler(denuncia: Denuncia){
    this.selectedDenuncia = denuncia
    this.denunciaClicked.emit(denuncia)
  }

  clickRemoveHandler(denuncia: Denuncia){
    this.denunciaService.removeDenuncia(denuncia)
  }
}
