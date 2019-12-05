import { Component, OnInit } from '@angular/core';
import { Complaint } from '../complaintInterface';
import { ComplaintService } from '../complaint.service';
import { ActivatedRoute, ParamMap } from '@angular/router'


@Component({
  selector: 'app-detail-complaint',
  templateUrl: './detail-complaint.component.html',
  styleUrls: ['./detail-complaint.component.scss']
})
export class DetailComplaintComponent implements OnInit {
  complaintsList : Complaint[];
  selectedComplaint : Complaint; 

  constructor(private complaintService: ComplaintService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.complaintsList =  this.complaintService.getComplaints();
    this.route.paramMap
    .subscribe((params: ParamMap) => {
        this.selectedComplaint = this.complaintsList[Number(params.get('id'))-1];
    })

  }

}
