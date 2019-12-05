import { Component, OnInit } from '@angular/core';
import {DataCompService} from '../data-comp.service';
import { ActivatedRoute, ParamMap } from '@angular/router'


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(
    private dataCompService : DataCompService,
    private route: ActivatedRoute
    ) { }
  complaints : object[] = [];
  selectedComplaint : object;


  ngOnInit() {
    if (this.dataCompService.login()){
      this.complaints = this.dataCompService.getComplaints();
      this.route.paramMap
        .subscribe((params: ParamMap) => {
          this.selectedComplaint = this.complaints[params.get('id')]
        })
    } else {
      window.location.replace("/login");
    } 
  }

}
