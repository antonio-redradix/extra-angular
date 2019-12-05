import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Complaint } from '../interfaces';
import { ComplaintsService } from '../complaints.service';

@Component({
  selector: 'app-complaints-detail',
  templateUrl: './complaints-detail.component.html',
  styleUrls: ['./complaints-detail.component.scss']
})
export class ComplaintsDetailComponent implements OnInit {

  complaintDetailed : Complaint

  constructor(private complaintService:ComplaintsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'))
      this.complaintDetailed = this.complaintService.getComplaints()[id]
    })
  }
}
