import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap} from '@angular/router'
import { ComplaintsService} from '../complaints.service'


@Component({
  selector: 'app-complaints-detail',
  templateUrl: './complaints-detail.component.html',
  styleUrls: ['./complaints-detail.component.scss']
})
export class ComplaintsDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private complaintsService:ComplaintsService) { }
  complaints = []
  selectedComplaint
  id
  ngOnInit() {
    this.complaints = this.complaintsService.getComplaints()
    this.route.paramMap
    .subscribe((params: ParamMap) => {
      this.id = params.get('id')
      this.selectedComplaint = this.complaints[this.id]
      console.log(params.get('id'))
      

    })
  }

}
