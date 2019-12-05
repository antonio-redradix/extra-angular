import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReportService} from '../report.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.scss']
})
export class ReportFormComponent implements OnInit {
  formForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.maxLength(8)]),
    date: new FormControl('', ),
    complainant: new FormControl('', [Validators.required, Validators.pattern('[0-9]*'), Validators.maxLength(8)]),
    priority: new FormControl('', [Validators.required, Validators.pattern('(si|Si|SI|no|No|NO)*')]),
    cibercrime: new FormControl('', [Validators.required, Validators.pattern('(si|Si|SI|no|No|NO)*')]),
    declaration: new FormControl('', [Validators.required, Validators.maxLength(150)] ),
  });
  constructor( private reportService: ReportService, private router: Router) { }
  onSubmit() {
    this.reportService.getReport().push(this.formForm.value); /* Añadir formulario rellenado a la lista*/
    // console.log(this.reportService.getReport());
    this.router.navigate(['/list']);
  }
  ngOnInit() {
  }
}
