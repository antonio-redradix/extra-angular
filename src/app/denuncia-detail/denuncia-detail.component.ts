import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector: 'app-denuncia-detail',
  templateUrl: './denuncia-detail.component.html',
  styleUrls: ['./denuncia-detail.component.scss']
})
export class DenunciaDetailComponent implements OnInit {
	@Input() idReportShow: object

	constructor() { }
	ngOnInit() { }
}
