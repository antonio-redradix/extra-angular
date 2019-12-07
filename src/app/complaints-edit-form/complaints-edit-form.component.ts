import { Component, OnInit } from '@angular/core';
import { ComplaintsService } from '../../app/complaints.service';
import { ComplaintInterface } from '../../interfaces/interfaces';
import { FormControl, FormGroup, Validators, MaxLengthValidator } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { __values } from 'tslib';

@Component({
  selector: 'app-complaints-edit-form',
  templateUrl: './complaints-edit-form.component.html',
  styleUrls: ['./complaints-edit-form.component.scss']
})
export class ComplaintsEditFormComponent implements OnInit {

  maxLength: number = 9;
  success: string;
  numSelected: number;
  complaintList: ComplaintInterface [];

  ngOnChanges(): void {
    this.numSelected = 3;
  }

  complaintForm = new FormGroup({
    title: new FormControl(''),
    date: new FormControl(''),
    whistleblower: new FormControl(''),
    priority: new FormControl(''),
    cyberSecurity: new FormControl(''),
    declaration: new FormControl(''),
  });

  constructor(private complaintsService: ComplaintsService, private route: ActivatedRoute) { }

  update = this.complaintsService.updateComplaintList;

  onSubmit(): void {
    
    console.log('Datos enviados!!');

    let newComplaint = this.complaintForm.value;
    this.update(this.numSelected, newComplaint);

    this.complaintForm.reset();
    this.success = 'Delito actualizado'
    
  }

  
  ngOnInit(): void {
    
    console.log('complaints-edit-form iniciada');

    this.complaintList = JSON.parse(window.sessionStorage.complaintList);

    this.route.paramMap
    .subscribe((params: ParamMap) => {
      this.numSelected = Number(params.get('id'));
    
    });
  }

  

}
