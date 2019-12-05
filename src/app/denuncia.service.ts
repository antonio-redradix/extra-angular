import { Injectable } from '@angular/core';
import { Denuncia } from './denuncia';

@Injectable({
  providedIn: 'root'
})
export class DenunciaService {
  denuncias : Denuncia[] = [
    {
      id: 1,
      titulo: "Estafa zapatos online",
      fecha: "19/11/19",
      denunciante: "41692317S",
      prioridad: "alta",
      ciberdelito: "si",
      descripcion: "Loren ipsum 1",
    },
    {
      id: 2,
      titulo: "Pelea plaza España",
      fecha: "03/12/19",
      denunciante: "12345678U",
      prioridad: "media",
      ciberdelito: "no",
      descripcion: "Loren ipsum 2",
    },
    {
      id: 3,
      titulo: "Robo av. Europa",
      fecha: "10/05/17",
      denunciante: "98765432Y",
      prioridad: "baja",
      ciberdelito: "no",
      descripcion: "Loren ipsum 3",
    }
  ]
  constructor() {
    if (window.localStorage != undefined)
      this.denuncias = JSON.parse(window.localStorage.getItem('denuncias'))
  }

  getDenuncias(): Array<Denuncia>{
    return this.denuncias
  }

  

  addDenuncia(denuncia:Denuncia){
    denuncia.id = this.denuncias.length + 1
    this.denuncias.push(denuncia)
    window.localStorage.setItem('denuncias', JSON.stringify(this.denuncias))
  }

  removeDenuncia(denuncia:Denuncia){
    this.denuncias.splice((denuncia.id-1),1)
    window.localStorage.setItem('denuncias', JSON.stringify(this.denuncias))
  }

  editDenuncia(denuncia:Denuncia){
    window.localStorage.setItem('denuncias', JSON.stringify(this.denuncias))
  }
}