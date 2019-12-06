import { Component, OnInit} from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms'
import { ComplaintService } from '../complaint.service';
import { ActivatedRoute, ParamMap } from '@angular/router';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {
  id
  complaints
  selectedcomplaint
  createForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    denunciator: new FormControl('', [Validators.required, Validators.maxLength(9)]),
    priority: new FormControl('', [Validators.required, Validators.maxLength(4)]),
    cibercrime: new FormControl('', [Validators.required, Validators.maxLength(2)]),
    description: new FormControl('', Validators.required)
  })
  onSubmit() {
    if(JSON.parse(sessionStorage.getItem('sessionData'))==null){
    if (this.selectedcomplaint!= undefined) {
      this.complaints = this.complaintService.getComplaints()
      this.complaints[this.id] = this.createForm.value
      this.complaintService.setComplaint(this.complaints)
      sessionStorage.setItem('sessionData', JSON.stringify(this.complaints))
      alert("Su denuncia ha sido modificada")
    }
    else {
      this.complaints=this.complaintService.getComplaints()
      this.complaints.push(this.createForm.value)
      sessionStorage.setItem('sessionData', JSON.stringify(this.complaints))
      alert("Su denuncia ha sido registrada")
    }

    }else{
      if (this.selectedcomplaint!= undefined) {
      this.complaints = JSON.parse(sessionStorage.getItem('sessionData'))
      this.complaints[this.id] = this.createForm.value
      this.complaintService.setComplaint(this.complaints)
      sessionStorage.setItem('sessionData', JSON.stringify(this.complaints))
      alert("Su denuncia ha sido modificada")
    } else {
      this.complaints=JSON.parse(sessionStorage.getItem('sessionData'))
      this.complaints.push(this.createForm.value)
      sessionStorage.setItem('sessionData', JSON.stringify(this.complaints))
      alert("Su denuncia ha sido registrada")
    }

    }
    
  }

  constructor(private complaintService: ComplaintService, private route: ActivatedRoute) { }
  
  ngOnInit() {
    if(JSON.parse(sessionStorage.getItem('sessionData'))==null){
    this.complaints = this.complaintService.getComplaints()
    this.route.paramMap
      .subscribe((params: ParamMap) => {
        this.id = params.get('id')
        this.selectedcomplaint = this.complaints[this.id];
        if (this.selectedcomplaint != undefined) {
          this.createForm.setValue({
            title: this.selectedcomplaint.title,
            date: this.selectedcomplaint.date,
            denunciator: this.selectedcomplaint.denunciator,
            priority: this.selectedcomplaint.priority,
            cibercrime: this.selectedcomplaint.cibercrime,
            description: this.selectedcomplaint.description,
          })
        };
      })
  }else{
    this.complaints=JSON.parse(sessionStorage.getItem('sessionData'))
    this.route.paramMap
      .subscribe((params: ParamMap) => {
        this.id = params.get('id')
        this.selectedcomplaint = this.complaints[this.id];
        if (this.selectedcomplaint != undefined) {
          this.createForm.setValue({
            title: this.selectedcomplaint.title,
            date: this.selectedcomplaint.date,
            denunciator: this.selectedcomplaint.denunciator,
            priority: this.selectedcomplaint.priority,
            cibercrime: this.selectedcomplaint.cibercrime,
            description: this.selectedcomplaint.description,
          })
        };
      })
  }}
}
