import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DenunciaService } from '../denuncia.service'
import { Denuncia } from '../denuncia'

@Component({
  selector: 'app-form-denuncias',
  templateUrl: './form-denuncias.component.html',
  styleUrls: ['./form-denuncias.component.scss']
})
export class FormDenunciasComponent implements OnInit {
  formulario = new FormGroup({
    titulo: new FormControl('',Validators.required),
    fecha: new FormControl('',Validators.required),
    denunciante: new FormControl('',Validators.required),
    prioridad: new FormControl('',Validators.required),
    ciberdelito: new FormControl('',Validators.required),
    descripcion: new FormControl('',Validators.required),
  })
  
  constructor(private denunciaService: DenunciaService) { }

  ngOnInit() {
  }

  onSubmit() {
    let denunciaForm : Denuncia
    denunciaForm = {
      id: 0,
      titulo: this.formulario.value.titulo,
      fecha: this.formulario.value.fecha,
      denunciante: this.formulario.value.denunciante,
      prioridad: this.formulario.value.prioridad,
      ciberdelito: this.formulario.value.ciberdelito,
      descripcion: this.formulario.value.descripcion
    }
    this.denunciaService.addDenuncia(denunciaForm)
    window.location.assign("http://localhost:4200/list")
  }
}
