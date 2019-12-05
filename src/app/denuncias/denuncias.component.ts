import { Component, OnInit } from '@angular/core';
import { DenunciasService } from'../denuncias.service'
import { ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector: 'app-denuncias',
  templateUrl: './denuncias.component.html',
  styleUrls: ['./denuncias.component.scss']
})
export class DenunciasComponent implements OnInit {
	reports : object[]
	idReportShow: object

	constructor(private denunciasServices: DenunciasService, private route: ActivatedRoute) { }

	ngOnInit() {
		this.reports = this.denunciasServices.getDenuncias()
		this.route.paramMap.subscribe((params: ParamMap) => {
			this.idReportShow  = this.reports[parseInt(params.get('id'))-1]
			this.updateSelectedReport(this.idReportShow)
		})
	}

	updateSelectedReport(newReport: any) : void{
		this.idReportShow = newReport
	}
}
