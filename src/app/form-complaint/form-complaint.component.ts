import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Complaint } from '../complaintInterface';
import { ComplaintService } from '../complaint.service';
import { ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector: 'app-form-complaint',
  templateUrl: './form-complaint.component.html',
  styleUrls: ['./form-complaint.component.scss']
})
export class FormComplaintComponent implements OnInit {
  complaintForm = new FormGroup({
    title: new FormControl('', Validators.required),
    id: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    complainant: new FormControl('', Validators.required),
    priority: new FormControl('', Validators.required),
    cybercrime: new FormControl('', Validators.required),
    statement: new FormControl('', Validators.required),
  });

  modify : boolean = false;
  index : number;

  constructor(private complaintService: ComplaintService, private route: ActivatedRoute) { }
  
  ngOnInit() {
      this.route.paramMap
      .subscribe((params: ParamMap) => {
        if(params.get('id') != undefined){
          this.modify = true;

          let complaints = this.complaintService.getComplaints();
          this.index = Number(params.get('id'))-1;
          let complaintSelected = complaints[this.index];

          this.complaintForm.setValue({
            title: complaintSelected.title, 
            id: complaintSelected.id,
            date: complaintSelected.date,
            complainant: complaintSelected.complainant,
            priority: complaintSelected.priority,
            cybercrime: complaintSelected.cybercrime,
            statement: complaintSelected.statement
          });
        }
    })
  }

  onSubmit(){
    if(this.modify){
      this.complaintService.updateComplaint(this.complaintForm.value, this.index);
    }else{
      let newComplaint : Complaint = this.complaintForm.value;
      this.complaintService.addComplaint(newComplaint);
    }
  }

}
