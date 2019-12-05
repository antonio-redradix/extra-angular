import { Component, OnInit } from '@angular/core';
import {ComplaintService} from '../complaint.service';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

constructor(private complaintService:ComplaintService, private route: ActivatedRoute) { }
complaints=[]
selectedcomplaint
  ngOnInit() {
        this.complaints = this.complaintService.getComplaint()
        this.route.paramMap
        .subscribe((params: ParamMap) => {
            let id =params.get('id')
            this.selectedcomplaint = this.complaints[id];
            console.log(this.complaints[id])
      })
      };
  }


