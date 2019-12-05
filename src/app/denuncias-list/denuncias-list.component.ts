import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Denuncia } from '../denuncias/denuncia';
import { DenunciaService } from '../denuncia.service';

@Component({
  selector: 'app-denuncias-list',
  templateUrl: './denuncias-list.component.html',
  styleUrls: ['./denuncias-list.component.scss']
})
export class DenunciasListComponent implements OnInit {

@Input() denuncias: Array<Denuncia>;
@Output() selectdenuncia = new EventEmitter<Denuncia>();

  constructor(private denunciaService: DenunciaService) {
  }

  ngOnInit() {
  }

  sdenuncia(d: Denuncia) {
    this.selectdenuncia.emit(d);
  }

  borrardenuncia(d: Denuncia) {
    this.denunciaService.remove(d);
  }
}
