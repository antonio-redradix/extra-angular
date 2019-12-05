import { Component, OnInit } from '@angular/core';
import {ReportService } from '../report.service';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.scss']
})

export class ReportListComponent implements OnInit {
  report = undefined;
  constructor(private reportservice: ReportService) { }

  delete(id) {
    this.reportservice.getReport().splice(id, 1);
  }

  ngOnInit() {
    this.report = this.reportservice.getReport();
  }

}
