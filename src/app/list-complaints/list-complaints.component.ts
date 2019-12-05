import { Component, OnInit } from '@angular/core';
import { ComplaintService } from '../complaint.service';
import { Complaint } from '../complaintInterface';

@Component({
  selector: 'app-list-complaints',
  templateUrl: './list-complaints.component.html',
  styleUrls: ['./list-complaints.component.scss']
})

export class ListComplaintsComponent implements OnInit {

  complaintsList : Complaint[];

  constructor(private complaintService: ComplaintService) { }

  ngOnInit() {
    this.complaintsList = this.complaintService.getComplaints();
  }

  delete(index){
    this.complaintService.deleteComplaint(index);
  }

}
