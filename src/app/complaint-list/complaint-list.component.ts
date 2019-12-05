import { Component, OnInit } from '@angular/core';

import { ComplaintsService } from '../complaints.service'
import { Complaint} from '../complaint';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-complaint-list',
  templateUrl: './complaint-list.component.html',
  styleUrls: ['./complaint-list.component.scss']
})
export class ComplaintListComponent implements OnInit {

  complaints: Complaint[] = [];
  complaint: object;

  constructor(private complaintsService: ComplaintsService, private route: ActivatedRoute) { }

  delete(index){
    this.complaints.splice(index,1);
  }

  ngOnInit() {
    this.complaints = this.complaintsService.getComplaints();
  }

}
