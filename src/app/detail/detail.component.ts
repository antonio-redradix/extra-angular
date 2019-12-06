import { Component, OnInit } from '@angular/core';
import { ComplaintService } from '../complaint.service';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(private complaintService: ComplaintService, private route: ActivatedRoute) { }
  complaints = []
  selectedcomplaint
  id
  ngOnInit() {
    if (JSON.parse(sessionStorage.getItem('sessionData')) == null) {
      this.complaints = this.complaintService.getComplaints()
      this.route.paramMap
        .subscribe((params: ParamMap) => {
          this.id = params.get('id')
          this.selectedcomplaint = this.complaints[this.id];
          console.log(this.complaints[this.id])
        })
    }else {
      this.complaints=JSON.parse(sessionStorage.getItem('sessionData'))
      this.route.paramMap
        .subscribe((params: ParamMap) => {
          this.id = params.get('id')
          this.selectedcomplaint = this.complaints[this.id];
    }
        )};
}

}
