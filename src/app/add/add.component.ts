import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {DataCompService} from '../data-comp.service';
import { Complaint } from '../interfaces';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  addComplaint = new FormGroup({
    title: new FormControl('', Validators.required),
    accuser: new FormControl('', Validators.required),
    text: new FormControl('', Validators.required),
    priority: new FormControl('', Validators.required),
    ciberCrime: new FormControl(''),
    })

  complaints : Complaint[] = [];
  priorities : string[] = ['alta', 'media', 'baja'];

  onSubmit(){
    let newComplaint : Complaint = this.addComplaint.value;
    let nextId : number = this.complaints[this.complaints.length-1].id+1;
    newComplaint['id']= nextId;
    newComplaint['date'] = new Date().toLocaleDateString();
    this.complaints.push(newComplaint);
    localStorage.database = JSON.stringify(this.complaints);
    window.location.replace("/");
  }

  constructor(
    private dataCompService : DataCompService,
  ) { }

  ngOnInit() {
    if (this.dataCompService.login()){
      this.complaints = this.dataCompService.getComplaints();
    } else {
      window.location.replace("/login")
    }
  }

}
