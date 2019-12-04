import { Component, OnInit, Input } from '@angular/core';
import {Denuncia} from '../denuncias/denuncia'

@Component({
  selector: 'app-denuncia-detail',
  templateUrl: './denuncia-detail.component.html',
  styleUrls: ['./denuncia-detail.component.scss']
})
export class DenunciaDetailComponent implements OnInit {
  @Input() denunciaSelected : Denuncia
  constructor() { }

  ngOnInit() {
  }

}
