import { Component, OnInit } from '@angular/core';
import {ComplaintService} from '../complaint.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  complaints=undefined
  constructor(private complaintService:ComplaintService, private route: ActivatedRoute) { }

  clickDelete(id){
    this.complaintService.getComplaint().splice(id,1)
    console.log(id)
  }

  ngOnInit() {
  this.complaints=this.complaintService.getComplaint()
  }
}
