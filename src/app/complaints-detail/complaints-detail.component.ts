import { Component, OnInit } from '@angular/core';
import { ComplaintsService } from '../complaints.service';
import { ComplaintInterface } from '../../interfaces/interfaces';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-complaints-detail',
  templateUrl: './complaints-detail.component.html',
  styleUrls: ['./complaints-detail.component.scss']
})
export class ComplaintsDetailComponent implements OnInit {

  complaintList: ComplaintInterface [];
  numSelected: number;
  complaintSelected: ComplaintInterface;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
    .subscribe((params: ParamMap) => {
      this.numSelected = Number(params.get('id'));

      this.complaintList = JSON.parse(window.sessionStorage.complaintList);
      console.log(this.complaintList);
    });

    console.log('complaints-detail iniciada');
  }
}
