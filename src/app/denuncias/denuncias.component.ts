import { Component, OnInit } from '@angular/core';
import {
  Denuncia
} from './denuncia';
import { DenunciaService } from '../denuncia.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-denuncias',
  templateUrl: './denuncias.component.html',
  styleUrls: ['./denuncias.component.scss']
})
export class DenunciasComponent implements OnInit {
  denuncias: Array<Denuncia>;
  selected: Denuncia;
  constructor(private denunciaService: DenunciaService, private route: ActivatedRoute) {
    this.selected = undefined;
  }

  ngOnInit() {
    this.denuncias = this.denunciaService.getDenuncias();
    this.route.paramMap.subscribe((params: ParamMap) => {
      // tslint:disable-next-line: radix
      this.selected = this.denuncias[parseInt( params.get('id')) - 1];
    });
  }

  clickHandler(denuncia) {
    this.selected = denuncia;
  }



}
