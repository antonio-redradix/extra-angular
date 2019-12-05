import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Complaint } from '../interfaces';
import { ComplaintsService } from '../complaints.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-complaints-add',
  templateUrl: './complaints-add.component.html',
  styleUrls: ['./complaints-add.component.scss']
})
export class ComplaintsAddComponent implements OnInit {
  
  complaintForm = new FormGroup({
    title: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    complainer: new FormControl('', Validators.required),
    priority: new FormControl('', Validators.required),
    cyber: new FormControl(''),
    declaration: new FormControl('', Validators.required)
  })

  constructor(private complaintService:ComplaintsService, private location: Location) { }

  ngOnInit() {
  }

  onSubmit() {
    const newComplaint: Complaint = {
      id: 0,
      title: this.complaintForm.value.title,
      date: this.complaintForm.value.date,
      complainer: this.complaintForm.value.complainer,
      priority: this.complaintForm.value.priority,
      cyber: this.complaintForm.value.cyber,
      declaration: this.complaintForm.value.declaration
    }
    this.complaintService.addComplaint(newComplaint)
    this.location.back()
  }
}
