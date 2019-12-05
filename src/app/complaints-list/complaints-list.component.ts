import { Component, OnInit } from '@angular/core';
import { ServiceListService } from '../service-list.service';

@Component({
  selector: 'app-complaints-list',
  templateUrl: './complaints-list.component.html',
  styleUrls: ['./complaints-list.component.scss']
})
export class ComplaintsListComponent implements OnInit {

  complaints = undefined //Definir la variable para poder utilizarla en ngOnInit
  
  constructor(private serviceListService:ServiceListService) { } //Aqui se pone private (un nombre cualq):NombreDelServicio)

  remove(id){
    this.serviceListService.getComplaints().splice(id,1)
  }

  

  ngOnInit() {

    this.complaints = this.serviceListService.getComplaints() //Definimos la variable que hemos creado pra hacer referencia al array y lo igualamos a this.(NombreDelServicio).(nombre del metodo de service.ts)
  }

}
