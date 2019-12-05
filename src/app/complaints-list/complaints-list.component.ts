import { Component, OnInit } from '@angular/core';
import { ComplaintsService } from '../complaints.service';
import { ComplaintInterface } from '../../interfaces/interfaces';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-complaints-list',
  templateUrl: './complaints-list.component.html',
  styleUrls: ['./complaints-list.component.scss']
})

export class ComplaintsListComponent implements OnInit {

  complaintList: ComplaintInterface [];
  
  constructor(private complaintsService: ComplaintsService, private route: ActivatedRoute) { }

  delete = this.complaintsService.deleteComplaint;

  renderSomething () {
    console.log('cosas y cositas')
  };

  ngOnInit() {
    this.complaintList = JSON.parse(window.sessionStorage.complaintList);
    
    console.log('complaints-list iniciada')
  };

  ngDoCheck() {
    this.complaintList = JSON.parse(window.sessionStorage.complaintList);
  }

}
