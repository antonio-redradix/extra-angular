import { Component, OnInit } from '@angular/core';
import { ComplaintsService } from '../../app/complaints.service';
import { FormControl, FormGroup, Validators, MaxLengthValidator } from '@angular/forms';

@Component({
  selector: 'app-complaints-form',
  templateUrl: './complaints-form.component.html',
  styleUrls: ['./complaints-form.component.scss']
})
export class ComplaintsFormComponent implements OnInit {

  maxLength: number =9;
  success: string;

  complaintForm = new FormGroup({
    title: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    whistleblower: new FormControl('', Validators.required),
    priority: new FormControl('', Validators.required),
    cyberSecurity: new FormControl('', Validators.required),
    declaration: new FormControl('', Validators.required),
  });

  constructor(private complaintsService: ComplaintsService) { }

  onSubmit() {
    if (this.complaintForm.valid) {
      console.log('Datos enviados!!');

      let newComplaint = this.complaintForm.value;
      this.complaintsService.addComplaint(newComplaint);

      this.complaintForm.reset();
      this.success = 'Delito añadido correctamente a la base de datos'
    }
  }

  ngOnInit() {
    console.log('complaints-form iniciada');
  }

}
