import { Component, OnInit, Input } from '@angular/core';
import { Denuncia } from '../denuncia'

@Component({
  selector: 'app-detail-denuncias',
  templateUrl: './detail-denuncias.component.html',
  styleUrls: ['./detail-denuncias.component.scss']
})
export class DetailDenunciasComponent implements OnInit {
  @Input() denuncia: Denuncia

  constructor() { }

  ngOnInit() {
  }

}
