import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceListService {

  constructor() { }
  compliant1={name: "Estafa zapatos online", date: "19/11/2019", id: "41693317S", priority: "alta", cibercrime: "si", declaration: "bla bla bla bla"}
  compliant2={name: "Pelea en Plaza España", date: "20/11/2019", id: "51693317S", priority: "alta", cibercrime: "no", declaration: "bla bla bla bla"}
  compliant3={name: "Robo en Avda.Europa", date: "21/11/2019", id: "61693317S", priority: "alta", cibercrime: "no", declaration: "bla bla bla bla"}
  complaintsList=[this.compliant1, this.compliant2, this.compliant3]

  getComplaints(){
  return this.complaintsList
  }

  setComplaint(complaints){
    this.complaintsList=complaints
  }

}
