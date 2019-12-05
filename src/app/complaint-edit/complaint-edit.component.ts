import { Component, OnInit } from '@angular/core';

import { ComplaintsService } from '../complaints.service'
import { Complaint} from '../complaint';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-complaint-edit',
  templateUrl: './complaint-edit.component.html',
  styleUrls: ['./complaint-edit.component.scss']
})
export class ComplaintEditComponent implements OnInit {

  complaints: Complaint[] = [];
  complaint: Complaint;
  id: number;

  form = new FormGroup({
    name: new FormControl('',[Validators.required]),
    code: new FormControl('',[Validators.required,Validators.pattern(/^\d{8}[a-zA-Z]$/)]),
    number: new FormControl('',[Validators.required,Validators.pattern(/^[0-9]{1,6}$/)]),
    date: new FormControl('',[Validators.required,Validators.pattern(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/)]),
    priority: new FormControl('',Validators.required),
    type: new FormControl('',Validators.required),
    declaration: new FormControl('',Validators.required)
  });

  onSubmit() {
    this.form.value.id = this.id;
    this.complaints[this.id] = this.form.value;
    localStorage.complaints = JSON.stringify(this.complaints);
    window.location.replace("/list");
  }

  constructor(private complaintsService: ComplaintsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.complaints = this.complaintsService.getComplaints();
    this.route.paramMap
      .subscribe((params: ParamMap) => {
        this.complaint=this.complaints[params.get('id')];
        this.id = parseInt(params.get('id'));
        this.form.setValue({
          name: this.complaint.name,
          code: this.complaint.code,
          number: this.complaint.number,
          date: this.complaint.date,
          priority: this.complaint.priority,
          type: this.complaint.type,
          declaration: this.complaint.declaration
        })
    })
  }

}
