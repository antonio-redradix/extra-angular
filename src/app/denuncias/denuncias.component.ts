import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Denuncia } from '../denuncia'
import { DenunciaService } from '../denuncia.service'

@Component({
  selector: 'app-denuncias',
  templateUrl: './denuncias.component.html',
  styleUrls: ['./denuncias.component.scss']
})
export class DenunciasComponent implements OnInit {
  denuncias : Denuncia[]

  selectedDenuncia: Denuncia

  constructor(private denunciaService: DenunciaService,private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.denuncias = this.denunciaService.getDenuncias()
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.selectedDenuncia = this.denuncias[parseInt(params.get('id'))-1]
  })
  }

  denunciaClickHandler(data){
    this.selectedDenuncia = data
  }
}
