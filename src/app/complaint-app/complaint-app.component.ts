import { Component, OnInit } from '@angular/core';
import { ComplaintsService } from '../complaints.service';

@Component({
  selector: 'app-complaint-app',
  templateUrl: './complaint-app.component.html',
  styleUrls: ['./complaint-app.component.scss']
})
export class ComplaintAppComponent implements OnInit {

  constructor(private complaintsService: ComplaintsService) { }

  ngOnInit() {

    window.sessionStorage.complaintList = JSON.stringify(this.complaintsService.getComplaintList());

    console.log('Aplicación iniciada, la lista de delitos se ha actualizado con '+ this.complaintsService.getComplaintList().length + ' denuncias por defecto. Puedes añadir, modificar y elminar denuncias. La aplicación se actualizará al recargar la página');
  }

}
