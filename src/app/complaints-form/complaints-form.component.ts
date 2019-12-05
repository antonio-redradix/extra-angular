import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import { ServiceListService } from '../service-list.service';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-complaints-form',
  templateUrl: './complaints-form.component.html',
  styleUrls: ['./complaints-form.component.scss']
})
export class ComplaintsFormComponent implements OnInit {

  id
  nameForm = new FormGroup({
    name: new FormControl('', Validators.required),
    date: new FormControl('', [Validators.required, Validators.minLength(6)]),
    id: new FormControl('', Validators.required),
    priority: new FormControl('', [Validators.required, Validators.minLength(2)]),
    cibercrime: new FormControl('', Validators.required),
    declaration: new FormControl('', Validators.required)
  })
  
  constructor(private serviceListService:ServiceListService, private route:ActivatedRoute) { }

  onSubmit(){

  if (this.selectedComplaint != undefined){ 
    let complaints = this.serviceListService.getComplaints()
    complaints[this.id] = this.nameForm.value
    this.serviceListService.setComplaint(complaints)}
    else {this.serviceListService.getComplaints().push(this.nameForm.value)
    }
  }
  
  complaints=[]
  selectedComplaint

  ngOnInit() {
    this.complaints = this.serviceListService.getComplaints()
    this.route.paramMap
    .subscribe((params: ParamMap) => {
      this.id = params.get('id')
      this.selectedComplaint= this.complaints[this.id]
      console.log(params.get('id'))
      this.serviceListService.getComplaints() 
      this.nameForm.setValue({
        name:this.selectedComplaint.name,
        date: this.selectedComplaint.date,
        id: this.selectedComplaint.id,
        priority: this.selectedComplaint.priority,
        cibercrime: this.selectedComplaint.cibercrime,
        declaration: this.selectedComplaint.declaration,
      })
    })
  }
}
