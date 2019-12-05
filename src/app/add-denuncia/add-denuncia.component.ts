import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DenunciasService } from'../denuncias.service'
import { ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector: 'app-add-denuncia',
  templateUrl: './add-denuncia.component.html',
  styleUrls: ['./add-denuncia.component.scss']
})
export class AddDenunciaComponent implements OnInit {

	nameForm = new FormGroup({
		title: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]),
		reportDate: new FormControl(''),
		codRep: new FormControl('', [Validators.required, Validators.min(8)]),
		priority: new FormControl('', Validators.required),
		cyberReport: new FormControl('', Validators.required),
		desc: new FormControl('', [Validators.required, Validators.minLength(20), Validators.maxLength(500)]),
	})

	idReportEdit : number = undefined
	editReport : object

	constructor(private denunciasServices: DenunciasService, private route: ActivatedRoute) { }

	ngOnInit() {
		if(this.route.snapshot.paramMap.get("id")){
			let report = this.denunciasServices.getDenuncia(this.route.snapshot.paramMap.get("id"))
			this.idReportEdit = parseInt(this.route.snapshot.paramMap.get("id"))
			this.editReport = {
				title: report.title,
				reportDate: report.date,
				codRep: report.codDenunciante,
				priority: report.prority,
				cyberReport: report.cyber,
				desc: report.description
			}
			this.nameForm.setValue(this.editReport) 
		}
	}

	onSubmit(){
		let newReport = {
			id: 0,
			title: this.nameForm.value.title,
			date: this.nameForm.value.reportDate,
			codDenunciante: this.nameForm.value.codRep,
			prority: this.nameForm.value.priority,
			cyber: this.nameForm.value.cyberReport,
			description: this.nameForm.value.desc
		}
		if(this.idReportEdit != undefined){
			this.editExistingReport(newReport, this.idReportEdit)	
		} else{
			this.addNewReport(newReport)
		}
		window.location.assign("/list");
	}

	addNewReport(newReport){
		this.denunciasServices.addDenuncia(newReport)
	}

	editExistingReport(editReport, id){
		this.denunciasServices.editDenuncia(editReport, id)
	}
}
