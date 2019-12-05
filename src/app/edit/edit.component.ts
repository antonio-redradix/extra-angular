import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {DataCompService} from '../data-comp.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Complaint } from '../interfaces';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  
  complaints : Complaint[] = [];
  selectedComplaint : Complaint;
  priorities : string[] = ['alta', 'media', 'baja'];
  
  editComplaint = new FormGroup({
    title: new FormControl('', Validators.required),
    accuser: new FormControl('', Validators.required),
    text: new FormControl('', Validators.required),
    priority: new FormControl('', Validators.required),
    ciberCrime: new FormControl(''),
    })

  onSubmit(){
    let oldId = this.selectedComplaint.id
    this.selectedComplaint = this.editComplaint.value;
    this.selectedComplaint['id']= oldId;
    this.selectedComplaint['date'] = new Date().toLocaleDateString();
    this.route.paramMap
      .subscribe((params: ParamMap) =>{
        this.complaints[params.get('id')] = this.selectedComplaint;
      });
    localStorage.database = JSON.stringify(this.complaints);
    window.location.replace("/list");
  }

  fillForm(){
    this.editComplaint.setValue({
    title: this.selectedComplaint.title,
    accuser: this.selectedComplaint.accuser,
    priority: this.selectedComplaint.priority,
    ciberCrime: this.selectedComplaint.ciberCrime,
    text: this.selectedComplaint.text,
    })
  }

  constructor(
    private dataCompService : DataCompService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if (this.dataCompService.login()){
      this.complaints = this.dataCompService.getComplaints();
      this.route.paramMap
        .subscribe((params: ParamMap) => {
          this.selectedComplaint = this.complaints[params.get('id')];
          this.fillForm();
        })
    } else {
      window.location.replace("/login")
    }
  }

}
