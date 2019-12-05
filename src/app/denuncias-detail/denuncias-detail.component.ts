import { Component, OnInit, Input } from '@angular/core';
import { Denuncia } from '../denuncias/denuncia';

@Component({
  selector: 'app-denuncias-detail',
  templateUrl: './denuncias-detail.component.html',
  styleUrls: ['./denuncias-detail.component.scss']
})
export class DenunciasDetailComponent implements OnInit {
  @Input() selected: Denuncia;
  constructor() { }

  ngOnInit() {
  }

}
