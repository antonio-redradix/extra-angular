import { Injectable } from '@angular/core';
import { Complaint } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class ComplaintsService {
  /*
  complaintsArr : Complaint[] = [
    {
      id: 0,
      title: "Circo Ilegal",
      date: "11/04/2019",
      complainer: "41693317S",
      priority: "Alta",
      cyber: false,
      declaration: "'Estaban bailando en la calle, le digo', dijo la denunciante. Se investigará a fondo el asunto de los danzantes ilegales."
    },
    {
      id: 1,
      title: "Perro Malo",
      date: "11/04/2019",
      complainer: "41645323P",
      priority: "Media",
      cyber: true,
      declaration: "'Le ví robar un zapato. Y nunca volvió, señor agente. Ahora mi tío Paco camina a la pata coja'. El perro se encuentra en orden de busca y captura."
    },
    {
      id: 2,
      title: "Robo de Banco",
      date: "11/04/2019",
      complainer: "41623789N",
      priority: "Baja",
      cyber: false,
      declaration: "Atraco a mano armada de la sucursal Pedrito, de la calle Alameda. Se va viendo."
    }
  ]
  */

  complaintsArr : any[] = []

  constructor() {}

  checkStorage() {
    if (window.localStorage["complaintsArr"] == undefined) {
      window.localStorage["complaintsArr"] == "[]"
    } else {
      this.complaintsArr = JSON.parse(window.localStorage["complaintsArr"])
    }
  }

  getComplaints(){
    return this.complaintsArr
  }

  addComplaint(complaint:Complaint){
    complaint.id = this.complaintsArr.length
    this.complaintsArr.push(complaint)
    this.updateStorage()
  }

  updateComplaint(complaint:Complaint){
    console.log(complaint.id)
    this.complaintsArr[complaint.id] = complaint
    this.updateStorage()
  }

  deleteComplaint(id:number){
    this.complaintsArr.splice(id, 1)
    this.updateStorage()
  }

  updateStorage() {
    window.localStorage["complaintsArr"] = JSON.stringify(this.complaintsArr)
  }
}