import { Component, OnInit } from '@angular/core';
import { ComplaintsService } from '../complaints.service';
import { Complaint } from '../interfaces';

@Component({
  selector: 'app-complaints-list',
  templateUrl: './complaints-list.component.html',
  styleUrls: ['./complaints-list.component.scss']
})
export class ComplaintsListComponent implements OnInit {

  complaints:Complaint[]
  complaintNumber

  constructor(private complaintService:ComplaintsService) {}

  ngOnInit() {
    this.complaintService.checkStorage()
    this.complaints = this.complaintService.getComplaints()
    this.complaintNumber = this.complaints.length
  }

  deleteComplaint(id) {
    this.complaintService.deleteComplaint(id)
    this.complaints = this.complaintService.getComplaints()
    this.complaintNumber = this.complaints.length
  }
}
