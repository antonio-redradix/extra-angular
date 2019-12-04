import { Injectable } from '@angular/core';
import { Denuncia } from './denuncias/denuncia'

@Injectable({
  providedIn: 'root'
})
export class DenunciasService {
  Denuncias: Denuncia[] = [
    {
      ID:1, Titulo: "Apuñalamiento múltiple en Calle Valdemingómez", Fecha: new Date(), Denunciante: '704264812P',
      Prioridad: "Muy Alta", Ciberdelito: false, Declaracion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum erat ut rutrum molestie. Duis lacinia ultricies diam nec placerat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec efficitur, risus eget interdum laoreet, magna leo fermentum tortor, sit amet ultricies mi justo eget massa."
    },
    {
      ID:2,Titulo: "Consumición de estupefacientes en Avenida Moncloa", Fecha: new Date(), Denunciante: '288264832Q',
      Prioridad: "Baja", Ciberdelito: false, Declaracion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum erat ut rutrum molestie. Duis lacinia ultricies diam nec placerat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec efficitur, risus eget interdum laoreet, magna leo fermentum tortor, sit amet ultricies mi justo eget massa."
    },
    {
      ID:3,Titulo: "Robo a mano armada en Barrio de la Jota", Fecha: new Date(), Denunciante: '288264832Q',
      Prioridad: "Baja", Ciberdelito: false, Declaracion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum erat ut rutrum molestie. Duis lacinia ultricies diam nec placerat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec efficitur, risus eget interdum laoreet, magna leo fermentum tortor, sit amet ultricies mi justo eget massa."
    },
  ]
  constructor() { }

  getDenuncias(){
    console.log(this.Denuncias)
    console.log(localStorage.getItem('Denuncias'))
    if(localStorage.getItem('Denuncias')!== null){
      // return JSON.parse(localStorage.getItem('Denuncias'))
      this.Denuncias =  JSON.parse(localStorage.getItem('Denuncias'))
    }else{
      console.log(this.Denuncias)
      let denuncias = this.Denuncias
      localStorage.setItem('Denuncias',JSON.stringify(denuncias))
    }
    return this.Denuncias
  }
  getDenuncia(id){
    this.Denuncias =  JSON.parse(localStorage.getItem('Denuncias'))
    console.log(this.Denuncias)
    return this.Denuncias[id-1]
  }
  addDenuncia(denuncia : Denuncia, editar:boolean){
    let denuncias = JSON.parse(localStorage.getItem('Denuncias'))
    if(editar){
      console.log(denuncia.ID)
      denuncias[denuncia.ID-1]=denuncia
      localStorage.setItem('Denuncias',JSON.stringify(denuncias))

    }else{
        console.log(denuncia)
      if(localStorage.getItem('Denuncias')){
        console.log("Añadiendo...")
        
        denuncia.ID = denuncias.length+1
        console.log(denuncias)
        denuncias.push(denuncia)
        console.log(denuncias)
        localStorage.setItem('Denuncias',JSON.stringify(denuncias))
      }else{
        let denuncias : Denuncia[]
        denuncia.ID = this.Denuncias.length+1
        denuncias = this.Denuncias
        denuncias.push(denuncia)
        console.log(denuncias)
        localStorage.setItem('Denuncias',JSON.stringify(denuncias))
      }

    }
    
  }

  removeDenuncia(denuncia : Denuncia){
    let denuncias = JSON.parse(localStorage.getItem('Denuncias'))
    console.log(denuncias[denuncia.ID-1])
    denuncias.splice(denuncia.ID-1,1)
    localStorage.setItem('Denuncias',JSON.stringify(denuncias))
    this.Denuncias=denuncias
    location.reload()
  }
}
