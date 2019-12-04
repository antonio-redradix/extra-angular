import { Component, OnInit} from '@angular/core';
import {Denuncia} from './denuncia'
import{DenunciasService} from '../denuncias.service'
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-denuncias',
  templateUrl: './denuncias.component.html',
  styleUrls: ['./denuncias.component.scss']
})
export class DenunciasComponent implements OnInit {
  Denuncias : Denuncia[]
  selectedDenuncia : Denuncia
  constructor(private denunciasService:DenunciasService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.Denuncias = this.denunciasService.getDenuncias()
    this.route.paramMap.subscribe((params: ParamMap) => { 
      console.log(params)
      this.selectedDenuncia=this.Denuncias[parseInt(params.get('id'))-1]
    })
  }

  selectHandler(denuncia){
    // console.log(denuncia)
    this.selectedDenuncia = denuncia
  }

}
