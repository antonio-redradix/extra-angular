import { Component, OnInit } from '@angular/core';
import { ComplaintsService} from '../complaints.service'

@Component({
  selector: 'app-complaints-list',
  templateUrl: './complaints-list.component.html',
  styleUrls: ['./complaints-list.component.scss']
})
export class ComplaintsListComponent implements OnInit {
  complaints = undefined
  constructor(private complaintsService:ComplaintsService) { }

  delete(id) {
    this.complaintsService.getComplaints().splice(id,1)
  } 
 
  ngOnInit() {
    this.complaints = this.complaintsService.getComplaints()
  }

}


