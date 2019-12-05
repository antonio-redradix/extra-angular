import { Component, OnInit } from '@angular/core';
import { ComplaintsService } from '../../app/complaints.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-complaints-form',
  templateUrl: './complaints-form.component.html',
  styleUrls: ['./complaints-form.component.scss']
})
export class ComplaintsFormComponent implements OnInit {

  complaintForm = new FormGroup({
    title: new FormControl(''),
    date: new FormControl(''),
    whistleblower: new FormControl(''),
    priority: new FormControl(''),
    cyberSecurity: new FormControl(''),
    declaration: new FormControl(''),
  });

  constructor(private complaintsService: ComplaintsService) { }

  onSubmit() {
    let newComplaint = this.complaintForm.value;
    this.complaintsService.addComplaint(newComplaint);

  }

  ngOnInit() {
    console.log('complaints-form iniciada');
  }

}
