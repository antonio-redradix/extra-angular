import { Component, OnInit } from '@angular/core';
import {DataCompService} from '../data-comp.service';
import { Complaint } from '../interfaces'
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  complaints : Complaint[] = [];

  delete(id: number): void{
    this.dataCompService.deleteComplaint(id);
    window.location.replace("/list");
  }

  constructor(
    private dataCompService : DataCompService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    if (this.dataCompService.login()){
      this.complaints = this.dataCompService.getComplaints();
    }else {
      window.location.replace("/login");
    }
  }
}
