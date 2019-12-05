import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DenunciaService } from '../denuncia.service'
import { Denuncia } from '../denuncia'
import { ActivatedRoute,ParamMap } from '@angular/router';

@Component({
  selector: 'app-edit-denuncias',
  templateUrl: './edit-denuncias.component.html',
  styleUrls: ['./edit-denuncias.component.scss']
})

export class EditDenunciasComponent implements OnInit {
  selectedDenuncia : Denuncia

  formularioEdit = new FormGroup({
    titulo: new FormControl('',Validators.required),
    fecha: new FormControl('',Validators.required),
    denunciante: new FormControl('',Validators.required),
    prioridad: new FormControl('',Validators.required),
    ciberdelito: new FormControl('',Validators.required),
    descripcion: new FormControl('',Validators.required),
  })
  constructor(private denunciaService: DenunciaService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.selectedDenuncia = this.denunciaService.getDenuncias()[parseInt(params.get('id'))-1]
    })
    this.formularioEdit.setValue(
    {
      titulo: this.selectedDenuncia.titulo, 
      fecha: this.selectedDenuncia.fecha,
      denunciante: this.selectedDenuncia.denunciante,
      prioridad: this.selectedDenuncia.prioridad,
      ciberdelito: this.selectedDenuncia.ciberdelito,
      descripcion: this.selectedDenuncia.descripcion,
    }
    )
  }
  onSubmit() {
    this.selectedDenuncia.titulo = this.formularioEdit.value.titulo
    this.selectedDenuncia.fecha = this.formularioEdit.value.fecha
    this.selectedDenuncia.denunciante = this.formularioEdit.value.denunciante
    this.selectedDenuncia.prioridad = this.formularioEdit.value.prioridad
    this.selectedDenuncia.ciberdelito = this.formularioEdit.value.ciberdelito
    this.selectedDenuncia.descripcion = this.formularioEdit.value.descripcion
    this.denunciaService.editDenuncia(this.selectedDenuncia)
    window.location.assign("http://localhost:4200/list")
  }
}
