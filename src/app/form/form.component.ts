import { Component, OnInit } from '@angular/core';
import{ FormGroup, Validators, FormControl} from '@angular/forms'
import {ComplaintService} from '../complaint.service';
import { ActivatedRoute, ParamMap } from '@angular/router';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {
    id
    createForm = new FormGroup({
    title: new FormControl('',[Validators.required]),
    date: new FormControl('', [Validators.required, Validators.maxLength(8)]),
    denunciator: new FormControl('',[Validators.required, Validators.maxLength(9)]),
    priority: new FormControl('',[Validators.required, Validators.maxLength(4)]),
    cibercrime: new FormControl('', [Validators.required, Validators.maxLength(2)]),
    description: new FormControl('',Validators.required)})
    onSubmit() {
      if(this.selectedcomplaint!=undefined){
        let complaints = this.complaintService.getComplaint()
        complaints[this.id] = this.createForm.value
        this.complaintService.setComplaint(complaints)
        alert("Su denuncia ha sido modificada")
    }
    else{ 
      this.complaintService.getComplaint().push(this.createForm.value)
      alert("Su denuncia ha sido registrada")
      
    }
    }
    
  constructor(private complaintService:ComplaintService, private route: ActivatedRoute) { }
  complaints=[]
  selectedcomplaint
  ngOnInit() {
    this.complaints = this.complaintService.getComplaint()
    this.route.paramMap
    .subscribe((params: ParamMap) => {
        this.id =params.get('id')
        this.selectedcomplaint = this.complaints[this.id];
        this.createForm.setValue({
          title:this.selectedcomplaint.title,
          date:this.selectedcomplaint.date,
          denunciator:this.selectedcomplaint.denunciator,
          priority:this.selectedcomplaint.priority,
          cibercrime:this.selectedcomplaint.cibercrime,
          description:this.selectedcomplaint.description,
        });
  })
  };
  }
