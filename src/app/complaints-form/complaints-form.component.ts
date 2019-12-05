import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { ComplaintsService} from '../complaints.service'
import { ActivatedRoute, ParamMap} from '@angular/router'

@Component({
  selector: 'app-complaints-form',
  templateUrl: './complaints-form.component.html',
  styleUrls: ['./complaints-form.component.scss']
})
export class ComplaintsFormComponent implements OnInit {
  id
  formForm = new FormGroup({
    name: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    complainant: new FormControl('', Validators.required),
    priority: new FormControl('', Validators.required),
    cibercrime: new FormControl('', Validators.required),
    declaration: new FormControl('', Validators.required)
  })

  constructor(private complaintsService:ComplaintsService, private route: ActivatedRoute) { }

  onSubmit() {
    //console.log(this.formForm.value); // {firstName: "Lorem", lastName: "Ipsum"}
    if(this.selectedComplaint != undefined) {
      let complaints =  this.complaintsService.getComplaints()
      complaints[this.id] = this.formForm.value
      this.complaintsService.setComplaint(complaints) 
    } else {
      this.complaintsService.getComplaints().push(this.formForm.value)
    }

   }


   selectedComplaint
   complaints=[]
  ngOnInit() {
    this.complaints = this.complaintsService.getComplaints()
    this.route.paramMap
    .subscribe((params: ParamMap) => {
      this.id = params.get('id')
      this.selectedComplaint = this.complaints[this.id]
      console.log(params.get('id'))
      this.complaintsService.getComplaints()
      this.formForm.setValue({
        name: this.selectedComplaint.name,
        date: this.selectedComplaint.date,
        complainant: this.selectedComplaint.complainant,
        priority: this.selectedComplaint.priority,
        cibercrime: this.selectedComplaint.cibercrime,
        declaration: this.selectedComplaint.declaration
      })
    })

  }
}
