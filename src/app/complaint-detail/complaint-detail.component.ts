import { Component, OnInit } from '@angular/core';

import { ComplaintsService } from '../complaints.service'
import { Complaint} from '../complaint';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-complaint-detail',
  templateUrl: './complaint-detail.component.html',
  styleUrls: ['./complaint-detail.component.scss']
})
export class ComplaintDetailComponent implements OnInit {

  complaints: Complaint[] = [];
  complaint: object;

  constructor(private complaintsService: ComplaintsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.complaints = this.complaintsService.getComplaints();
    this.route.paramMap
      .subscribe((params: ParamMap) => {
        this.complaint=this.complaints[params.get('id')];
      })
  }

}
