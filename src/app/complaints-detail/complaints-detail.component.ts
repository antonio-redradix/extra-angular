import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router'
import { ServiceListService } from '../service-list.service';

@Component({
  selector: 'app-complaints-detail',
  templateUrl: './complaints-detail.component.html',
  styleUrls: ['./complaints-detail.component.scss']
})
export class ComplaintsDetailComponent implements OnInit {

  constructor(private serviceListService:ServiceListService, private route:ActivatedRoute) { }

  id 
  complaints=[]
  selectedComplaint

  ngOnInit() {
    this.complaints = this.serviceListService.getComplaints()
    this.route.paramMap
    .subscribe((params: ParamMap) => {
      this.id = params.get('id')
      this.selectedComplaint= this.complaints[this.id]
      console.log(params.get('id'))
    })

  }

}
