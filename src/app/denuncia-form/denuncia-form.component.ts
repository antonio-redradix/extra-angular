import { Component, OnInit } from '@angular/core';
import { Denuncia } from '../denuncias/denuncia';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {DenunciasService} from '../denuncias.service'
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-denuncia-form',
  templateUrl: './denuncia-form.component.html',
  styleUrls: ['./denuncia-form.component.scss']
})
export class DenunciaFormComponent implements OnInit {
  editar = false
  denuncia : Denuncia = {ID:0, Titulo: "", Fecha:new Date(), Denunciante:"", Prioridad:"",Ciberdelito:false,Declaracion:""}
  formDenuncia = new FormGroup({
    Titulo : new FormControl('', Validators.required),
    Fecha : new FormControl('', [Validators.required]),
    Denunciante : new FormControl('',[Validators.required, Validators.pattern('[0-9]+[A-Z]')]),
    Prioridad : new FormControl('', Validators.required),
    Ciberdelito: new FormControl(''),
    Declaracion : new FormControl('', [Validators.required, Validators.minLength(20)])
  }
  )
  constructor(private denunciasService : DenunciasService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => { 
      if(params.get('id')){
        this.editar = true
        console.log(params.get('id'))
        let denuncia = this.denunciasService.getDenuncia(params.get('id'))
        console.log(denuncia)
        this.denuncia.ID = denuncia.ID
        this.formDenuncia.controls.Titulo.setValue(denuncia.Titulo)
        //solo funciona recargando?? Al principio toISOString is not function
        console.log(typeof denuncia.Fecha)
        // console.log(denuncia.Fecha.substring(0,10))
        this.formDenuncia.controls.Fecha.setValue((denuncia.Fecha).toString().substring(0,10))
        this.formDenuncia.controls.Denunciante.setValue(denuncia.Denunciante)
        this.formDenuncia.controls.Ciberdelito.setValue(denuncia.Ciberdelito)
        this.formDenuncia.controls.Prioridad.setValue(denuncia.Prioridad)
        this.formDenuncia.controls.Declaracion.setValue(denuncia.Declaracion)
      }
    })
  }

  onSubmit(){
    console.log(this.denuncia)
    if(window.confirm("¿Desea añadir introducir los cambios?")){
      this.denuncia.Titulo = this.formDenuncia.get('Titulo').value
      this.denuncia.Fecha = this.formDenuncia.get('Fecha').value
      this.denuncia.Denunciante = this.formDenuncia.get('Denunciante').value
      this.denuncia.Prioridad = this.formDenuncia.get('Prioridad').value
      this.denuncia.Ciberdelito = this.formDenuncia.get('Ciberdelito').value
      this.denuncia.Declaracion = this.formDenuncia.get('Declaracion').value
      console.log("onSubmit form")
      this.denunciasService.addDenuncia(this.denuncia, this.editar)  
    }
  }

}
