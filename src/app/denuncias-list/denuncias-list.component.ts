import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router'
import { DenunciasService } from'../denuncias.service'

@Component({
  selector: 'app-denuncias-list',
  templateUrl: './denuncias-list.component.html',
  styleUrls: ['./denuncias-list.component.scss']
})
export class DenunciasListComponent implements OnInit {
	@Input() reports: any[]
	@Output() changeSelectedReport = new EventEmitter<any>()
	selectedReport : any
	
	constructor(private denunciasServices: DenunciasService) { }
	ngOnInit() { }
	changeReport(){
		this.changeSelectedReport.emit(this.selectedReport)
	}
	clickHandler(report){
		this.selectedReport = report
		this.changeReport()
	}
	clickHandlerRemove(report){
		this.denunciasServices.removeDenuncia(report.id)
		location.reload()
	}
}
