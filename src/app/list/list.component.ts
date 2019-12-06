import { Component, OnInit } from '@angular/core';
import {ComplaintService} from '../complaint.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  complaints=undefined 
  
  constructor(private complaintService:ComplaintService, private route: ActivatedRoute) { }
 
  clickDelete(id){
    // if(JSON.parse(sessionStorage.getItem('sessionData'))==null){
    // this.complaints.splice(id,1)
    // sessionStorage.setItem('sessionData',JSON.stringify(this.complaints))}
    // else{
      this.complaints.splice(id,1)
      sessionStorage.setItem('sessionData',JSON.stringify(this.complaints))
    //}
  
  }

  ngOnInit() {
  if(JSON.parse(sessionStorage.getItem('sessionData'))==null){
    console.log(JSON.parse(sessionStorage.getItem('sessionData')))
  this.complaints=this.complaintService.getComplaints()}
  else{
  this.complaints=JSON.parse(sessionStorage.getItem('sessionData'))
  console.log(JSON.parse(sessionStorage.getItem('sessionData')))
  }
  
  }
}
