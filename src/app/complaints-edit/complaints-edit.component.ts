import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Complaint } from '../interfaces';
import { ComplaintsService } from '../complaints.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-complaints-edit',
  templateUrl: './complaints-edit.component.html',
  styleUrls: ['./complaints-edit.component.scss']
})
export class ComplaintsEditComponent implements OnInit {
  
  complaintEdited : Complaint
  complaintForm
  id : number

  constructor(private complaintService:ComplaintsService, private location: Location, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = parseInt(params.get('id'))
      this.complaintEdited = this.complaintService.getComplaints()[this.id]
      this.complaintForm = new FormGroup({
        title: new FormControl(this.complaintEdited.title.toString(), Validators.required),
        date: new FormControl(this.complaintEdited.date.toString(), Validators.required),
        complainer: new FormControl(this.complaintEdited.complainer.toString(), Validators.required),
        priority: new FormControl(this.complaintEdited.priority.toString(), Validators.required),
        cyber: new FormControl(this.complaintEdited.cyber.toString()),
        declaration: new FormControl(this.complaintEdited.declaration.toString(), Validators.required)
      })
    })
  }  

  onSubmit() {
    const newComplaint: Complaint = {
      id: this.id,
      title: this.complaintForm.value.title,
      date: this.complaintForm.value.date,
      complainer: this.complaintForm.value.complainer,
      priority: this.complaintForm.value.priority,
      cyber: this.complaintForm.value.cyber,
      declaration: this.complaintForm.value.declaration
    }
    this.complaintService.updateComplaint(newComplaint)
    this.location.back()
  }
}
