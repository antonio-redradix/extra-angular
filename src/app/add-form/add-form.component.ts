import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Denuncia } from '../denuncias/denuncia';
import { DenunciaService } from '../denuncia.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {
  num;
  @Input() selected: Denuncia;
  denunciaForm = new FormGroup({
    name : new FormControl('', [Validators.required, Validators.minLength(10)]),
    fecha : new FormControl('', Validators.required),
    denunciante : new FormControl('', [Validators.required, Validators.pattern('[0-9]{8}[A-Z]')]),
    prioridad : new FormControl('', Validators.required),
    ciberdelito: new FormControl(''),
    descripcion: new FormControl('', [Validators.required, Validators.minLength(20)]),
  });
  constructor(private denunciaService: DenunciaService, private route: ActivatedRoute) {
   }

  ngOnInit() {
    this.route.paramMap
    .subscribe((params: ParamMap) => {
    // tslint:disable-next-line: radix
    this.num = parseInt(params.get('id')); });

    if (this.num) {
      // tslint:disable-next-line: prefer-const
      let delito;
      // tslint:disable-next-line: prefer-const
      let denuncia = this.denunciaService.getdenuncia(this.num);
      if (denuncia.ciberdelito === 'Si') { delito = true;
      } else { delito = false; }

      this.denunciaForm.setValue({name: denuncia.name, fecha: new Date(denuncia.fecha),
         denunciante: denuncia.denunciante, prioridad: denuncia.prioridad,
         ciberdelito: delito, descripcion: denuncia.descripcion});

    }
  }

  onSubmit() {
    let denuncia: Denuncia;
    let delito;
    if (this.num) {
      // tslint:disable-next-line: prefer-const
      let aux = this.denunciaService.getdenuncia(this.num);
      if (this.denunciaForm.value.ciberdelito) { delito = 'Si';
    } else { delito = 'No'; }
      denuncia = {id: aux.id, name: this.denunciaForm.value.name, fecha: this.denunciaForm.value.fecha,
        denunciante: this.denunciaForm.value.denunciante, prioridad: this.denunciaForm.value.prioridad,
        ciberdelito: delito, descripcion: this.denunciaForm.value.descripcion};
      this.denunciaService.modifydenuncia(denuncia);

    } else {
      if (this.denunciaForm.value.ciberdelito) { delito = 'Si';
    } else { delito = 'No'; }
// tslint:disable-next-line: prefer-const
    // tslint:disable-next-line: max-line-length
      denuncia = {id: 1, name: this.denunciaForm.value.name, fecha: this.denunciaForm.value.fecha,
      denunciante: this.denunciaForm.value.denunciante, prioridad: this.denunciaForm.value.prioridad,
      ciberdelito: delito, descripcion: this.denunciaForm.value.descripcion};
      this.denunciaService.add(denuncia);
    }


   }
}
