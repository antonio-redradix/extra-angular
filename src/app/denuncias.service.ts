import { Injectable } from '@angular/core';
import { HttpClient } from'@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DenunciasService {
	denuncias:object[] = []

	constructor() {		
		let d1 = {
			id: 0,
			title: "denuncia1",
			date: "21/02/2019",
			codDenunciante: "3213423",
			prority: "alta",
			cyber: true,
			description: "this sfjaspfjasdklfjasdklfjasdklfjsdklfjasdklfjasdklfjsdklfjasdklfjasdkl"
		}
		let d2 = {
			id: 1,
			title: "denuncia2",
			date: "21/02/2019",
			codDenunciante: "3213423",
			prority: "alta",
			cyber: true,
			description: "this sfjaspfjasdklfjasdklfjasdklfjsdklfjasdklfjasdklfjsdklfjasdklfjasdkl"
		}
		let d3 = {
			id: 2,
			title: "denuncia3",
			date: "21/02/2019",
			codDenunciante: "3213423",
			prority: "alta",
			cyber: true,
			description: "this sfjaspfjasdklfjasdklfjasdklfjsdklfjasdklfjasdklfjsdklfjasdklfjasdkl"
		}

		this.denuncias = JSON.parse(localStorage.getItem("denuncias")) || [d1, d2, d3]
		localStorage.setItem("denuncias", JSON.stringify(this.denuncias));
	}

	getDenuncias(){
		return JSON.parse(localStorage.getItem("denuncias"))
	}

	getDenuncia(id){
		let storageReports = JSON.parse(localStorage.getItem("denuncias"));
		return storageReports.find((elem) => elem.id == id )
	}

	addDenuncia(report){
		let storageReports = JSON.parse(localStorage.getItem("denuncias"));
		report.id = storageReports[storageReports.length-1].id + 1
		storageReports.push(report)
		localStorage.setItem("denuncias", JSON.stringify(storageReports));
	}
	editDenuncia(report, id){
		let storageReports = JSON.parse(localStorage.getItem("denuncias"));
		console.log(storageReports[id])
		console.log(report)
			storageReports[id].title = report.title
			storageReports[id].date = report.date
			storageReports[id].codDenunciante = report.codDenunciante
			storageReports[id].prority = report.prority
			storageReports[id].cyber = report.cyber
			storageReports[id].description = report.description
		localStorage.setItem("denuncias", JSON.stringify(storageReports));
	}
	removeDenuncia(id){
		let storageReports = JSON.parse(localStorage.getItem("denuncias"));
		storageReports.splice(id, 1);
		localStorage.setItem("denuncias", JSON.stringify(storageReports));
	}
}
