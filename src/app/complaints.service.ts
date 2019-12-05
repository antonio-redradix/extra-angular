import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ComplaintsService {
  constructor() { }
  complaint1 = {
    name: 'Estafa de zapatos online',
    date: '19/11/2019',
    complainant: '41693317S',
    priority: 'Alta',
    cibercrime: 'Sí',
    declaration: 'Sin declaraciones'
  }
  complaint2 = {
    name: 'Pelea en Plaza España',
    date: '10/11/2019',
    complainant: '41693317S',
    priority: 'Alta',
    cibercrime: 'No',
    declaration: 'Sin declaraciones'
  }
  complaint3 = {
    name: 'Robo en Avd. Europa',
    date: '01/11/2019',
    complainant: '41693317S',
    priority: 'Alta',
    cibercrime: 'No',
    declaration: 'Sin declaraciones'
  }
  complaintsList=[this.complaint1, this.complaint2, this.complaint3]
  
  getComplaints(){

    return this.complaintsList
  }

  setComplaint(complaints) {
    this.complaintsList = complaints
  }

}
